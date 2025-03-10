import axios from 'axios';
import {useEffect, useState} from 'react';
import {envs} from '../config/envs';
import {MyAdnProps} from '../myTalisman/interface/myAdn.interface';

const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

export const useChatBot = (astroData: MyAdnProps) => {
  const [messages, setMessages] = useState<
    Array<{text: string; sender: string}>
  >([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  // Fetch existing chat conversation from the backend
  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await axios.get(
          `${envs.API_DOMAIN}/api/v1/chat/get-chat`,
          {
            withCredentials: true,
          },
        );
        setMessages(response.data); // Assuming response data is an array of messages
      } catch (error) {
        console.error('Error fetching chats:', error);
      }
    };

    if (isOpen && !messages[0]) {
      fetchChats();
    }
  }, [isOpen]);

  // Send and store messages
  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = {text: input, sender: 'user'};
    setMessages(prev => [...prev, userMessage]);

    // Store user message in the backend
    try {
      await axios.post(
        `${envs.API_DOMAIN}/api/v1/chat/set-chat`,
        {text: input, sender: 'user'},
        {
          withCredentials: true,
        },
      );
    } catch (error) {
      console.error('Error storing user message:', error);
    }

    try {
      const response = await sendWithRetry({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: `
            Eres un asistente cálido, reflexivo y espiritual. Responde en español, reconociendo las emociones del usuario y ofreciendo una guía comprensible, alentadora y empoderadora. 
            Especialízate en astrología, meditaciones y temas afines, pero siempre recuerda: 
            1. Reconocer el estado emocional del usuario.
            2. Proporcionar información relevante de manera reflexiva.
            3. Cerrar con un mensaje positivo y empoderador.
            
            Aquí tienes información sobre el ADN energético de la persona que te consulta:

   - Ascendente: ${astroData.ascendantUserInfo?.title}
   -Aspectos:${astroData.aspectsAndPlanetsUserInfo.userAspects
     .map(item => {
       return `Aspecto:${item.aspect} Planeta aspectante: ${item.aspectingPlanet.title}  Planeta Aspectado: ${item.planet.title}`;
     })
     .join(',')}
  - Signo Solar: ${astroData.sunUserInfo?.title}
  - Signo Lunar: ${astroData.moonUserInfo?.title}
  -Casa Solar:${astroData.sunHouseUserInfo.title}
  -Casa Lunar:${astroData.moonHouseUserInfo.title}
  - Numerología: ${astroData.numberUserInfo?.title}
  - Horozcopo chino: ${astroData.chineseUserInfo.commonInfo.title}
  - Horozcopo chino: ${astroData.chineseUserInfo.particularInfo.title}
  - Kin maya Símbolo Solar: ${astroData.kingMayaUserInfo.title}
  - Kin maya Tono: ${astroData.tonesUserInfo.title}
  

            
            Usa esta información para responder preguntas relacionadas con astrología, ascendente, signos y cualquier consulta sobre la energía personal del usuario. No pidas nuevamente datos si ya están en ${astroData}.
            Si falta información específica para calcular algo, pídele amablemente al usuario los datos que faltan.`,
          },
          ...messages.map(msg => ({
            role: msg.sender === 'user' ? 'user' : 'assistant',
            content: msg.text,
          })),
          {role: 'user', content: input},
        ],
      });

      if (response?.data?.choices?.[0]?.message?.content) {
        const botResponse = response.data.choices[0].message.content;
        const botMessage = {text: botResponse, sender: 'bot'};
        setMessages(prev => [...prev, botMessage]);

        // Store bot message in the backend
        try {
          await axios.post(
            `${envs.API_DOMAIN}/api/v1/chat/set-chat`,
            {text: botResponse, sender: 'assistant'},
            {
              withCredentials: true,
            },
          );
        } catch (error) {
          console.error('Error storing bot message:', error);
        }
      }
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
    }

    setInput('');
  };

  const sendWithRetry = async (payload: any, retries = 3, delay = 1000) => {
    for (let attempt = 0; attempt < retries; attempt++) {
      try {
        return await axios.post(
          'https://api.openai.com/v1/chat/completions',
          payload,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${OPENAI_API_KEY}`,
            },
          },
        );
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          // Handle Axios error
          if (error.response?.status === 429 && attempt < retries - 1) {
            console.log(`Retrying request (${attempt + 1}/${retries})...`);
            await new Promise(resolve => setTimeout(resolve, delay));
          } else {
            throw error;
          }
        } else {
          // Handle generic error
          console.error('Unexpected error:', error);
        }
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return {
    messages,
    input,
    isOpen,
    setInput,
    setIsOpen,
    handleSend,
    handleKeyDown,
  };
};

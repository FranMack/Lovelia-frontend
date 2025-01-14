import { Component, ReactNode } from "react";
import { ErrorPage } from "../ui/pages/ErrorPage";


interface ErrorBoundaryState {
  hasError: boolean;
  errorMessage: string;
}

interface ErrorBoundaryProps {
  children: ReactNode; // Especificamos que 'children' puede ser cualquier nodo de React
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
    errorMessage: '',
  };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      errorMessage: error.message,
    };
  }

  componentDidCatch(error: Error, errorInfo: { componentStack: string }) {
    // Aquí puedes hacer log de los errores si lo necesitas
    console.error('Error Capturado:', error);
    console.error('Detalles del error:', errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
      <ErrorPage/>
      );
    }

    return this.props.children; // Renderiza los hijos si no hay error
  }
}

export default ErrorBoundary;

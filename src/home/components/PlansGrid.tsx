import { PlanOptions } from "../assets/plansData";

interface PlanGridOptions {
  plans: PlanOptions[];
  linkTo: (path: string) => void;
}

export const PlansGrid = ({ plans, linkTo }: PlanGridOptions) => {
  return (
    <div className="home-section4-plans-container">
      {plans.map((plan, i) => {
        return (
          <div
            key={plan.title}
            className={
              i % 2 === 0
                ? "home-section-card-container"
                : "home-section-card-container move-to-bottom"
            }
            style={{ backgroundColor: plan.backgroundColor }}
          >
            <h4 style={{ color: plan.color }}>{plan.title}</h4>
            <ul style={{ color: plan.color }}>
              {plan.items.map((item) => {
                return <li>{item}</li>;
              })}
            </ul>
            <h5 style={{ color: plan.color }}>{`$${plan.price}`}</h5>
            <div className="buttons-container">
              <button
                onClick={() => {
                  linkTo(plan.id);
                }}
                style={{ backgroundColor: plan.color }}
              >
                Lo quiero
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

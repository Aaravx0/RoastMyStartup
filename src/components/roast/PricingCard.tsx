import { RetroUICard, RetroUICardContent, RetroUICardHeader, RetroUICardTitle } from "@/components/retroui/card";
import { RetroUIButton } from "@/components/retroui/button";
import { Check, X } from "lucide-react";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: PricingFeature[];
  buttonText: string;
  isPopular?: boolean;
  onSelect?: () => void;
}

export function PricingCard({
  name,
  price,
  period = "/month",
  description,
  features,
  buttonText,
  isPopular = false,
  onSelect,
}: PricingCardProps) {
  return (
    <RetroUICard
      className={`relative ${
        isPopular ? "bg-primary" : "bg-background"
      }`}
      rotate={isPopular ? "1" : "-1"}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground px-4 py-1 border-2 border-foreground font-bold text-sm">
          MOST POPULAR 💀
        </div>
      )}

      <RetroUICardHeader>
        <RetroUICardTitle className="text-3xl">{name}</RetroUICardTitle>
        <p className="text-muted-foreground mt-2">{description}</p>
      </RetroUICardHeader>

      <RetroUICardContent>
        <div className="mb-6">
          <span className="text-5xl font-bold">{price}</span>
          {price !== "Free" && (
            <span className="text-muted-foreground">{period}</span>
          )}
        </div>

        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              {feature.included ? (
                <Check className="h-5 w-5 flex-shrink-0" />
              ) : (
                <X className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
              )}
              <span
                className={
                  feature.included ? "" : "text-muted-foreground line-through"
                }
              >
                {feature.text}
              </span>
            </li>
          ))}
        </ul>

        <RetroUIButton
          className="w-full"
          variant={isPopular ? "outline" : "default"}
          size="lg"
          onClick={onSelect}
        >
          {buttonText}
        </RetroUIButton>
      </RetroUICardContent>
    </RetroUICard>
  );
}

export type CardType = "main" | "primary" | "secondary";

export interface Card {
  id: string;
  type: CardType;
}

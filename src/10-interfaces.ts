type Size = "S" | "M" | "L" | "XL";

type Users = {
  id: string;
  name: string
}

interface UserInterface {
  id: string;
  name: string
}

interface HumanInterface {
  name: string;
  lastName: string;
}

/* Extendiendo la interface */

interface HeroInterface extends {
  HumanInterface{
    superPower: number
  }
}

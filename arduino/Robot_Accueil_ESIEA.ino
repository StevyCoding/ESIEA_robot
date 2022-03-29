#include "Robot_Accueil_ESIEA.h"

int value = 0;
void setup()
{
  // put your setup code here, to run once:
  Serial.begin(9600);
  Serial.println("8x8 LED Matrix Test");

  TeteStepper.setSpeed(100);       // La vitesse est en rotation par minute
  BrasDroitStepper.setSpeed(200);  // La vitesse est en rotation par minute
  BrasGaucheStepper.setSpeed(500); // La vitesse est en rotation par minute
}

void loop()
{
  if (Serial.available())
  {
    char tab[8];
    String c = Serial.readString();
    c.toCharArray(tab, 8);
    Serial.print(c);
    value = 16400;

    /// DEBUT DU SWITCH CASE
    switch (tab[0])
    {
    case 'A': // au revoir
      //InitBras();
      break;
    case 'B':
      //InitTete();
      break;
    case 'C':
      BrasDroit45();
      Serial.print("\n");
      break;
    case 'D':
      BrasDroit90();
      Serial.print("\n");
      break;
    case 'E':
      BrasGauche45();
      Serial.print("\n");
      break;
    case 'F':
      BrasGauche90();
      Serial.print("\n");
      break;
    case 'G':
      Tete45();
      Serial.print("\n");
      break;
    case 'H':
      Tete90();
      Serial.print("\n");
      break;
    default:
      //BrasDroit45();
      Serial.print(c);
      break;
    }
  }
}

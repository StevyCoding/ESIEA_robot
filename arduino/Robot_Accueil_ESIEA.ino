#include "Robot_Accueil_ESIEA.h"
        
int value=0;
Adafruit_BicolorMatrix MatriceGauche;
Adafruit_BicolorMatrix MatriceDroite;
void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  Serial.println("8x8 LED Matrix Test");
  
  MatriceGauche.begin(0x70);  // pass in the address
  MatriceDroite.begin(0x71);  
TetePhiStepper.setSpeed(30);     //La vitesse est en rotation par minute
TeteThetaStepper.setSpeed(20);   //La vitesse est en rotation par minute
BrasDroitStepper.setSpeed(30);   //La vitesse est en rotation par minute
BrasGaucheStepper.setSpeed(30);  //La vitesse est en rotation par minute

}

void loop() {
    if(Serial.available()){
        char tab[8];
        String c = Serial.readString();
        c.toCharArray(tab, 8);
        Serial.print(c);
        value=6400;

static const uint16_t color[8] = {
  LED_GREEN,
  LED_RED,
  LED_YELLOW,
  LED_GREEN,
  LED_RED,
  LED_YELLOW,
  LED_GREEN,
  LED_RED
};
        
        /// DEBUT DU SWITCH CASE
        switch (tab[0]) {
          case 'B': //Bonjour
            DroitCustom(value);
            drawAnimationGauche(0, 0, AWAKE, 8, 8, color,AWAKE_LEN);
            ThetaCustom(value);
            Serial.print("\n");
            break;
          case 'A': //au revoir
              DroitCustom(value);
              drawAnimationGauche(0, 0, FERME, 8, 8, LED_GREEN,FERME_LEN);
              ThetaCustom(-value);
            Serial.print("\n");
            break;
          case 'T'://Trop proche
              GaucheCustom(value);
              drawAnimationGauche(0, 0, ENERVE, 8, 8, LED_RED,ENERVE_LEN);
            Serial.print("\n");
            break;
          case 'L'://Longtemps
             drawAnimationGauche(0, 0, HAPPY, 8, 8, LED_RED,HAPPY_LEN);
            Serial.print("\n");
            break;
          case 'O'://OUI
            HochementTete();
            Serial.print("\n");
            break;
          case 'N'://NON
            NegationTete();
            break;
          case 'M'://Marcher
            BalancementBrasOppose();
            break;    
        default:
          ThetaCustom(value);
          Serial.print(c);
          break;
        }
    }
}

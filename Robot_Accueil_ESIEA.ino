#include "Robot_Accueil_ESIEA.h"
        
int value=0;
int pinTrig = 4;
int pinEcho = 5;
long temps;
float distance;
Adafruit_BicolorMatrix MatriceGauche;
Adafruit_BicolorMatrix MatriceDroite;
void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  Serial.println("8x8 LED Matrix Test");  
  pinMode(pinTrig, OUTPUT);
  pinMode(pinEcho, INPUT);
  digitalWrite(pinTrig, LOW);
  MatriceGauche.begin(0x70);  // pass in the address
  MatriceDroite.begin(0x71);  
TetePhiStepper.setSpeed(30);     //La vitesse est en rotation par minute
TeteThetaStepper.setSpeed(20);   //La vitesse est en rotation par minute
BrasDroitStepper.setSpeed(30);   //La vitesse est en rotation par minute
BrasGaucheStepper.setSpeed(30);  //La vitesse est en rotation par minute

}

void loop() {
    digitalWrite(pinTrig, HIGH);
    delayMicroseconds(10);
    digitalWrite(pinTrig, LOW);

    temps = pulseIn(pinEcho, HIGH);
    
     if(1){
        temps = temps/2;
        distance = (temps*340)/10000.0;
        Serial.print("Distance: ");
        Serial.print(distance);
        Serial.println(" cm");
        char tab[8];
        String c = Serial.readString();
        c.toCharArray(tab, 8);
        Serial.print(c);
        value=6400;
/*
static const uint16_t color[8] = {
  LED_GREEN,
  LED_RED,
  LED_YELLOW,
  LED_GREEN,
  LED_RED,
  LED_YELLOW,
  LED_GREEN,
  LED_RED
};*/
        
        /// DEBUT DU SWITCH CASE
        if (distance < 100.00)
          {
          GaucheCustom(value);
          drawAnimationGauche(0, 0, HAPPY, 8, 8, LED_GREEN,HAPPY_LEN);
          
        switch (tab[0]) {
          drawAnimationGauche(0, 0, 0, 8, 8, LED_RED,0);
          case 'B': //Bonjour
            Serial.println("BONJOUR");
            DroitCustom(value);
            drawAnimationGauche(0, 0, AWAKE, 8, 8, LED_GREEN,AWAKE_LEN);
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
          delay(5000);
        }
        
     else { 
            drawAnimationGauche(0, 0, DEF, 8, 8, LED_RED,DEF_LEN);
      }   
    }
}

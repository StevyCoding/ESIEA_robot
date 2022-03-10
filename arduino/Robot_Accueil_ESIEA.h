#pragma once

#include <Wire.h>
#include <Adafruit_GFX.h>
#include "Adafruit_LEDBackpack.h"
#include <Stepper.h>

/// Variable

extern Adafruit_BicolorMatrix MatriceGauche;
extern Adafruit_BicolorMatrix MatriceDroite;

extern const int stepsPerRevolution;         // on set le nombre de pas par revolution
extern const int TetePhiInitial;              //on fixe une valeur de position d'équilibre
extern const int TeteThetaInitial;            //on fixe une valeur de position d'équilibre
extern const int BrasDroitPositionInitiale;  //on fixe une valeur de position d'équilibre
extern const int BrasGauchePositionInitiale;  //on fixe une valeur de position d'équilibre

extern Stepper TeteThetaStepper;   //on setup le moteur et son pinout
extern Stepper TetePhiStepper;     //on setup le moteur et son pinout
extern Stepper BrasDroitStepper;   //on setup le moteur et son pinout
extern Stepper BrasGaucheStepper;  //on setup le moteur et son pinout

extern const int MicroTheta;    //on setup le pinout des microrupteurs
extern const int MicroPhi;      //on setup le pinout des microrupteurs
extern const int MicroDroit;    //on setup le pinout des microrupteurs
extern const int MicroGauche;   //on setup le pinout des microrupteurs


/// MATRICE LEDS

static const uint8_t HAPPY[][8] = {
{
  B00000000,
  B00000000,
  B00011000,
  B00111100,
  B01100110,
  B01000010,
  B00000000,
  B00000000
},{
  B00000000,
  B00011000,
  B00111100,
  B01100110,
  B01000010,
  B00000000,
  B00000000,
  B00000000
}};
const int HAPPY_LEN = sizeof(HAPPY)/8;

static const uint8_t ERRoR[][8] = {
{
  B10000001,
  B01000010,
  B00100100,
  B00011000,
  B00011000,
  B00100100,
  B01000010,
  B10000001
},{
  B11000011,
  B11100111,
  B01111110,
  B00111100,
  B00111100,
  B01111110,
  B11100111,
  B11000011
}};
const int ERRoR_LEN = sizeof(ERRoR)/8;

static const uint8_t FERME[][8] = {
{
  B00011000,
  B00100100,
  B01000010,
  B10000001,
  B10000001,
  B01000010,
  B00100100,
  B00011000
},
{
  B00000000,
  B00011000,
  B00100100,
  B01000010,
  B01000010,
  B00100100,
  B00011000,
  B00000000
},{
  B00000000,
  B00000000,
  B00011000,
  B00100100,
  B00100100,
  B00011000,
  B00000000,
  B00000000
},{
  B00000000,
  B00000000,
  B00000000,
  B00000000,
  B00000000,
  B00000000,
  B00000000,
  B00000000
}};
const int FERME_LEN = sizeof(FERME)/8;


static const uint8_t ENERVE[][8] = {
  {
  B00000000,
  B00000000,
  B00000000,
  B00000011,
  B00011100,
  B00100000,
  B01000000,
  B10000000
}
};
const int ENERVE_LEN = sizeof(ENERVE)/8;

static const uint8_t AWAKE[][8] = {
{
  B00000000,
  B00011000,
  B00100100,
  B01000010,
  B01000010,
  B00100100,
  B00011000,
  B00000000
},{
  B00011000,
  B00100100,
  B01000010,
  B10000001,
  B10000001,
  B01000010,
  B00100100,
  B00011000
},{
  B00111100,
  B01000010,
  B10000001,
  B10000001,
  B10000001,
  B10000001,
  B01000010,
  B00111100
},{
  B00011000,
  B00100100,
  B01000010,
  B10000001,
  B10000001,
  B01000010,
  B00100100,
  B00011000
}};
const int AWAKE_LEN = sizeof(AWAKE)/8;


///Methode

  void drawAnimation(int16_t x, int16_t y, uint8_t bitmap[][8], int16_t w, int16_t h, uint16_t color, int16_t lengthbitmap);
  void drawAnimationDroite(int16_t x, int16_t y, uint8_t bitmap[][8], int16_t w, int16_t h, uint16_t color, int16_t lengthbitmap);
  void drawAnimationGauche(int16_t x, int16_t y, uint8_t bitmap[][8], int16_t w, int16_t h, uint16_t color, int16_t lengthbitmap);
  void InitTete();
  void InitBras();
  void HochementTete();
  void NegationTete();
  void BalancementBrasParrallele();
  void BalancementBrasOppose();
  void PhyCustom(int nbstep);
  void ThetaCustom(int nbstep);
  void DroitCustom(int nbstep);
  void GaucheCustom(int nbstep);


  









  

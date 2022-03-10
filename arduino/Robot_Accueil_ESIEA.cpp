#include "Robot_Accueil_ESIEA.h"


//MatriceGauche = Adafruit_BicolorMatrix();
//MatriceDroite = Adafruit_BicolorMatrix();

Stepper TeteThetaStepper(stepsPerRevolution, 10, 11);   //on setup le moteur et son pinout
Stepper TetePhiStepper(stepsPerRevolution, 12, 13);     //on setup le moteur et son pinout
Stepper BrasDroitStepper(stepsPerRevolution, 8, 9);   //on setup le moteur et son pinout
Stepper BrasGaucheStepper(stepsPerRevolution, 6, 7);  //on setup le moteur et son pinout*/
const int MicroGauche = 1;    //on setup le pinout des microrupteurs
const int MicroDroit = 2;     //on setup le pinout des microrupteurs
const int MicroPhi = 3;       //on setup le pinout des microrupteurs
const int MicroTheta = 4;     //on setup le pinout des microrupteurs

const int stepsPerRevolution = 6400;         // on set le nombre de pas par revolution
const int TetePhiInitial = 267;              //on fixe une valeur de position d'équilibre
const int TeteThetaInitial = 1600;            //on fixe une valeur de position d'équilibre
const int BrasDroitPositionInitiale = -534;  //on fixe une valeur de position d'équilibre
const int BrasGauchePositionInitiale = 534;  //on fixe une valeur de position d'équilibre
int TetePhiCourant = 0;
int TeteThetaCourant = 0;
int BrasDroitCourant = 0;
int BrasGaucheCourant = 0;

const int MaxTetePhi=267;
const int MinTetePhi=-267;
const int MaxTeteTheta=1600;
const int MinTeteTheta=-1600;
const int MaxBrasDroit=1700;
const int MinBrasDroit=-1700;
const int MaxBrasGauche=1700;
const int MinBrasGauche=-1700;

void drawAnimation(int16_t x, int16_t y, uint8_t bitmap[][8], int16_t w, int16_t h, uint16_t color, int16_t lengthbitmap){
  MatriceDroite.clear();
  MatriceGauche.clear();
  for (int i = 0; i < lengthbitmap; i++){
    MatriceDroite.drawBitmap(0, 0, bitmap[i], 8, 8, color);
    MatriceGauche.drawBitmap(0, 0, bitmap[i], 8, 8, color);
    MatriceDroite.writeDisplay();
    MatriceGauche.writeDisplay();
    delay(500);
    MatriceDroite.clear();
    MatriceGauche.clear();
  }
}

void drawAnimationDroite(int16_t x, int16_t y, uint8_t bitmap[][8], int16_t w, int16_t h, uint16_t color, int16_t lengthbitmap){
  MatriceDroite.clear();
  for (int i = 0; i < lengthbitmap; i++){
    MatriceDroite.drawBitmap(0, 0, bitmap[i], 8, 8, color);
    MatriceDroite.writeDisplay();
    delay(500);
    MatriceDroite.clear();
  }
}

void drawAnimationGauche(int16_t x, int16_t y, uint8_t bitmap[][8], int16_t w, int16_t h, uint16_t color[], int16_t lengthbitmap){
  MatriceGauche.clear();
  for (int i = 0; i < lengthbitmap; i++){
    MatriceGauche.drawBitmap(0, 0, bitmap[i], 8, 8, color[i]);
    MatriceGauche.writeDisplay();
    delay(500);
    MatriceGauche.clear();
  }
}


void InitTete(){    //Fonction permettant d'initaliser les moteurs et de les placer en position initiale
  do{
    TeteThetaStepper.step(1);               //On décale légèrement le moteur
  }while(digitalRead(MicroTheta) == LOW);   //Tant que le microrupteur n'est pas enclanché
  do{
    TetePhiStepper.step(1);                 //On décale légèrement le moteur
  }while(digitalRead(MicroPhi) == LOW);     //Tant que le microrupteur n'est pas enclanché
  TeteThetaStepper.step(TeteThetaInitial);  //On bouge le moteur vers sa position d'équilibre
  TetePhiStepper.step(TetePhiInitial);      //On bouge le moteur vers sa position d'équilibre
}

void InitBras(){    //Fonction permettant d'initaliser les moteurs et de les placer en position initiale
  do{
    BrasDroitStepper.step(-1);              //On décale légèrement le moteur
  }while(digitalRead(MicroDroit) == LOW);   //Tant que le microrupteur n'est pas enclanché
    do{
    BrasGaucheStepper.step(1);              //On décale légèrement le moteur
  }while(digitalRead(MicroGauche) == LOW);  //Tant que le microrupteur n'est pas enclanché
  BrasDroitStepper.step(BrasDroitPositionInitiale);   //On bouge le moteur vers sa position d'équilibre
  BrasGaucheStepper.step(BrasGauchePositionInitiale); //On bouge le moteur vers sa position d'équilibre
}

void HochementTete(){
  TetePhiStepper.step((-1*TetePhiInitial));
  TetePhiStepper.step((2*TetePhiInitial));
  TetePhiStepper.step((-1*TetePhiInitial));
}

void NegationTete(){
  TeteThetaStepper.step((-1*TeteThetaInitial));
  TeteThetaStepper.step((2*TeteThetaInitial));
  TeteThetaStepper.step((-1*TeteThetaInitial));
}

void BalancementBrasParrallele(){
  BrasDroitStepper.step((-1*BrasDroitPositionInitiale));
  BrasGaucheStepper.step((-1*BrasGauchePositionInitiale));
  BrasDroitStepper.step((2*BrasDroitPositionInitiale));
  BrasGaucheStepper.step((2*BrasGauchePositionInitiale));
  BrasDroitStepper.step((-1*BrasDroitPositionInitiale));
  BrasGaucheStepper.step((-1*BrasGauchePositionInitiale));
}

void BalancementBrasOppose(){
  BrasDroitStepper.step((-1*BrasDroitPositionInitiale));
  BrasGaucheStepper.step((BrasGauchePositionInitiale));
  BrasDroitStepper.step((2*BrasDroitPositionInitiale));
  BrasGaucheStepper.step((-2*BrasGauchePositionInitiale));
  BrasDroitStepper.step((-1*BrasDroitPositionInitiale));
  BrasGaucheStepper.step((BrasGauchePositionInitiale));
}

void PhyCustom(int nbstep){
  TetePhiCourant = TetePhiCourant+nbstep;
  if(TetePhiCourant>MaxTetePhi){
    nbstep=nbstep-(TetePhiCourant-MaxTetePhi);
    TetePhiCourant=MaxTetePhi;
  }
  if(TetePhiCourant<MinTetePhi){
    nbstep=nbstep-(TetePhiCourant-MinTetePhi);
    TetePhiCourant=MinTetePhi;
  }
  TetePhiStepper.step(nbstep);
}

void ThetaCustom(int nbstep){
    TeteThetaCourant = TeteThetaCourant+nbstep;
  if(TeteThetaCourant>MaxTeteTheta){
    nbstep=nbstep-(TeteThetaCourant-MaxTeteTheta);
    TeteThetaCourant=MaxTeteTheta;
  }
  if(TeteThetaCourant<MinTeteTheta){
    nbstep=nbstep-(TeteThetaCourant-MinTeteTheta);
    TeteThetaCourant=MinTeteTheta;
  }
  TeteThetaStepper.step(nbstep);
}

void DroitCustom(int nbstep){
    BrasDroitCourant = BrasDroitCourant+nbstep;
  if(BrasDroitCourant>MaxBrasDroit){
    nbstep=nbstep-(BrasDroitCourant-MaxBrasDroit);
    BrasDroitCourant=MaxBrasDroit;
  }
  if(BrasDroitCourant<MinBrasDroit){
    nbstep=nbstep-(BrasDroitCourant-MinBrasDroit);
    BrasDroitCourant=MinBrasDroit;
  }
  BrasDroitStepper.step(nbstep);
}

void GaucheCustom(int nbstep){
    BrasGaucheCourant = BrasGaucheCourant+nbstep;
  if(BrasGaucheCourant>MaxBrasGauche){
    nbstep=nbstep-(BrasGaucheCourant-MaxBrasGauche);
    BrasGaucheCourant=MaxBrasGauche;
  }
  if(BrasGaucheCourant<MinBrasGauche){
    nbstep=nbstep-(BrasGaucheCourant-MinBrasGauche);
    BrasGaucheCourant=MinBrasGauche;
  }
  BrasGaucheStepper.step(nbstep);
}

#include "Robot_Accueil_ESIEA.h"

Stepper TeteStepper(stepsPerRevolution, 10, 11);     // on setup le moteur et son pinout
Stepper BrasDroitStepper(stepsPerRevolution, 8, 9);  // on setup le moteur et son pinout
Stepper BrasGaucheStepper(stepsPerRevolution, 6, 7); // on setup le moteur et son pinout*/

const int stepsPerRevolution = 6400;
const int MicroGauche = 1; // on setup le pinout des microrupteurs
const int MicroDroit = 2;  // on setup le pinout des microrupteurs
const int MicroTete = 3;   // on setup le pinout des microrupteurs

const int BrasGaucheQuart = 12500;
const int BrasGaucheDemi = 50000;
const int BrasDroisQuart = 12500;
const int BrasDroisDemi = 50000;
const int TeteQuart = 12500;
const int TeteDemi = 25000;

void InitTete()
{ // Fonction permettant d'initaliser les moteurs et de les placer en position initiale
  // Tant que le microrupteur n'est pas enclanché
  do
  {
    TeteStepper.step(1); // On bouge le moteur vers sa position d'équilibre
  } while (!MicroTete);
}

void InitBras()
{ // Fonction permettant d'initaliser les moteurs et de les placer en position initiale
  // Tant que le microrupteur n'est pas enclanché
  do
  {
    BrasDroitStepper.step(1); // On bouge le moteur vers sa position d'équilibre
  } while (!MicroDroit);
  do
  {
    BrasGaucheStepper.step(1); // On bouge le moteur vers sa position d'équilibre
  } while (MicroGauche);
}

void BrasGauche45()
{
  BrasGaucheStepper.step(BrasGaucheQuart); // On bouge le moteur vers sa position d'équilibre
}

void BrasGauche90()
{
  BrasGaucheStepper.step(BrasGaucheDemi); // On bouge le moteur vers sa position d'équilibre
}

void BrasDroit45()
{
  BrasDroitStepper.step(BrasDroisQuart); // On bouge le moteur vers sa position d'équilibre
}

void BrasDroit90()
{
  BrasDroitStepper.step(BrasDroisDemi); // On bouge le moteur vers sa position d'équilibre
}

void Tete45()
{
  TeteStepper.step(TeteQuart);
}
void Tete90()
{
  TeteStepper.step(TeteDemi);
}
void TeteCustom(int angle)
{
  int nbstep = angle * 278;
  TeteStepper.step(nbstep);
}
void BrasDroitCustom(int angle)
{
  int nbstep = angle * 278;
  BrasDroitStepper.step(nbstep);
}
void BrasGaucheCustom(int angle)
{
  int nbstep = angle * 278;
  BrasGaucheStepper.step(nbstep);
}

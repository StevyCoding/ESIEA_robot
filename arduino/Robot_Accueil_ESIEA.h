#pragma once

#include <Wire.h>
#include <Stepper.h>

/// Variable

extern const int stepsPerRevolution; // on set le nombre de pas par revolution
extern const int BrasGaucheQuart;
extern const int BrasGaucheDemi;
extern const int BrasDroisQuart;
extern const int BrasDroisDemi;
extern const int TeteQuart;
extern const int TeteDemi;
extern Stepper TeteStepper;       // on setup le moteur et son pinout
extern Stepper BrasDroitStepper;  // on setup le moteur et son pinout
extern Stepper BrasGaucheStepper; // on setup le moteur et son pinout

extern const int MicroTete;   // on setup le pinout des microrupteurs
extern const int MicroDroit;  // on setup le pinout des microrupteurs
extern const int MicroGauche; // on setup le pinout des microrupteurs

/// Methode

void InitTete();
void InitBras();
void BrasDroit45();
void BrasDroit90();
void BrasGauche45();
void BrasGauche90();
void Tete45();
void Tete90();

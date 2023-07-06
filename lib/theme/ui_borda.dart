import 'package:flutter/material.dart';

class UiBorda {
  static const double circulo = 400;
  static const double quadrada = 0;
  static const double arredondada = 8;

  static OutlineInputBorder inputBorda = const OutlineInputBorder(
    borderSide: BorderSide.none,
    borderRadius: BorderRadius.only(
      topLeft: Radius.circular(UiBorda.quadrada),
      topRight: Radius.circular(UiBorda.arredondada),
      bottomRight: Radius.circular(UiBorda.arredondada),
      bottomLeft: Radius.circular(UiBorda.quadrada),
    ),
  );
}

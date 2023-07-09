import 'package:flutter/material.dart';

class UiBorda {
  static const double circulo = 400;
  static const double quadrada = 0;

  static OutlineInputBorder inputBorda = const OutlineInputBorder(
    borderSide: BorderSide.none,
    borderRadius: BorderRadius.only(
      topLeft: Radius.circular(UiBorda.quadrada),
      topRight: Radius.circular(UiBorda.quadrada),
      bottomRight: Radius.circular(UiBorda.quadrada),
      bottomLeft: Radius.circular(UiBorda.quadrada),
    ),
  );
}

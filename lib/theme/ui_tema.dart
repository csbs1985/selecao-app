import 'package:flutter/material.dart';
import 'package:selecao_app/theme/ui_cor.dart';
import 'package:selecao_app/theme/ui_texto.dart';

class UiTema {
  static ThemeData tema = ThemeData(
    appBarTheme: const AppBarTheme(
      color: UiCor.appbar,
      elevation: 0,
      iconTheme: IconThemeData(color: UiCor.iconeAppbar),
      titleTextStyle: UiTexto.textoAppbar,
      titleSpacing: 0,
    ),
    brightness: Brightness.light,
    fontFamily: 'poppins',
    scaffoldBackgroundColor: UiCor.fundo,
    textTheme: const TextTheme(
      displaySmall: UiTexto.displaySmall,
      displayLarge: UiTexto.displayLarge,
    ),
  );
}

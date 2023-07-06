import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:selecao_app/theme/ui_cor.dart';
import 'package:selecao_app/theme/ui_texto.dart';

class UiTema {
  static definirTema() {
    SystemChrome.setSystemUIOverlayStyle(
      const SystemUiOverlayStyle(
        statusBarBrightness: Brightness.light,
        statusBarColor: UiCor.statusBar,
        statusBarIconBrightness: Brightness.light,
        systemNavigationBarColor: UiCor.navigationBar,
        systemNavigationBarIconBrightness: Brightness.light,
      ),
    );
  }

  static ThemeData tema = ThemeData(
    appBarTheme: const AppBarTheme(
      color: UiCor.appbar,
      elevation: 0,
      iconTheme: IconThemeData(color: UiCor.icone),
      titleSpacing: 0,
    ),
    brightness: Brightness.light,
    fontFamily: 'poppins',
    scaffoldBackgroundColor: UiCor.fundo,
    textTheme: const TextTheme(
      displaySmall: UiTexto.displaySmall,
      displayMedium: UiTexto.displayMedium,
      displayLarge: UiTexto.displayLarge,
    ),
    dialogTheme: const DialogTheme(
      shape:
          RoundedRectangleBorder(borderRadius: BorderRadius.all(Radius.zero)),
      actionsPadding: EdgeInsets.all(16),
      backgroundColor: Color(0xFF0C2D54),
    ),
  );
}

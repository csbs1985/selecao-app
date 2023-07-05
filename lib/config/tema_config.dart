import 'package:flutter/services.dart';
import 'package:selecao_app/theme/ui_cor.dart';

class TemaConfig {
  definirTema() {
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

  definirTemaInicio() {
    SystemChrome.setSystemUIOverlayStyle(
      const SystemUiOverlayStyle(
        statusBarBrightness: Brightness.light,
        statusBarColor: UiCor.statusBarInicio,
        statusBarIconBrightness: Brightness.light,
        systemNavigationBarColor: UiCor.navigationBarInicio,
        systemNavigationBarIconBrightness: Brightness.dark,
      ),
    );
  }
}

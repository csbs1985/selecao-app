import 'package:flutter/services.dart';
import 'package:selecao_app/theme/ui_cor.dart';

class TemaConfig {
  definirTema() {
    SystemChrome.setSystemUIOverlayStyle(
      const SystemUiOverlayStyle(
        statusBarIconBrightness: Brightness.light,
        statusBarColor: UiCor.statusBar,
        systemNavigationBarColor: UiCor.navigationBar,
      ),
    );
  }
}

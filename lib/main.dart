import 'package:flutter/material.dart';
import 'package:selecao_app/config/tema_config.dart';
import 'package:selecao_app/page/selecao_page.dart';
import 'package:selecao_app/theme/ui_tema.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();

  runApp(const MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> with WidgetsBindingObserver {
  final TemaConfig _temaConfig = TemaConfig();

  @override
  void initState() {
    super.initState();
    _temaConfig.definirTema();
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: UiTema.tema,
      home: const SelecaoPage(),
    );
  }
}

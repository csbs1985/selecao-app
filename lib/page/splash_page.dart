import 'package:flutter/material.dart';
import 'package:selecao_app/theme/ui_cor.dart';

class SplashPage extends StatefulWidget {
  const SplashPage({super.key});

  @override
  State<SplashPage> createState() => _SplashPageState();
}

class _SplashPageState extends State<SplashPage> with TickerProviderStateMixin {
  @override
  void initState() {
    super.initState();
    _navegarInicio();
  }

  _navegarInicio() async {
    // await Future.delayed(const Duration(seconds: UiDuracao.splash), () {
    //   context.push(RoutesEnum.INICIO.value);
    // });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Container(
          width: double.infinity,
          color: UiCor.fundo,
          child: const Column(
            children: [],
          ),
        ),
      ),
    );
  }
}

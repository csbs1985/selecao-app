import 'package:flutter/material.dart';
import 'package:selecao_app/appbar/padrao_appbar.dart';

class PlacarPage extends StatefulWidget {
  const PlacarPage({super.key});

  @override
  State<PlacarPage> createState() => _PlacarPageState();
}

class _PlacarPageState extends State<PlacarPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: PadraoAppbar(callback: () => {}),
    );
  }
}

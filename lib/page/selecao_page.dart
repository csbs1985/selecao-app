import 'package:flutter/material.dart';
import 'package:selecao_app/appbar/padrao_appbar.dart';

class SelecaoPage extends StatefulWidget {
  const SelecaoPage({super.key});

  @override
  State<SelecaoPage> createState() => _SelecaoPageState();
}

class _SelecaoPageState extends State<SelecaoPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: PadraoAppbar(callback: () => {}, texto: 'Placar e cronômetro'),
    );
  }
}

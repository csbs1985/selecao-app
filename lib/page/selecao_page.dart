import 'package:flutter/material.dart';
import 'package:selecao_app/appbar/padrao_appbar.dart';
import 'package:selecao_app/config/string_config.dart';

class SelecaoPage extends StatefulWidget {
  const SelecaoPage({super.key});

  @override
  State<SelecaoPage> createState() => _SelecaoPageState();
}

class _SelecaoPageState extends State<SelecaoPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: PadraoAppbar(
        callback: () => {},
        texto: SELECIONAR_TIME,
      ),
    );
  }
}
import 'package:flutter/material.dart';
import 'package:selecao_app/appbar/padrao_appbar.dart';
import 'package:selecao_app/config/string_config.dart';
import 'package:selecao_app/config/tema_config.dart';
import 'package:selecao_app/input/jogadores_input.dart';

class SelecaoPage extends StatefulWidget {
  const SelecaoPage({super.key});

  @override
  State<SelecaoPage> createState() => _SelecaoPageState();
}

class _SelecaoPageState extends State<SelecaoPage> {
  final TemaConfig _temaConfig = TemaConfig();

  @override
  void initState() {
    super.initState();
    _temaConfig.definirTemaSelecionar();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: PadraoAppbar(callback: () => {}),
      body: SingleChildScrollView(
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.all(16),
              child: Text(
                SELECIONAR_DESCRICAO,
                style: Theme.of(context).textTheme.displayMedium,
              ),
            ),
            const JogadoresPadraoInput(
              hintText: "Jogadores...",
            ),
            Padding(
              padding: const EdgeInsets.all(16),
              child: Text(
                SELECIONAR_NUMERO,
                style: Theme.of(context).textTheme.displayMedium,
              ),
            ),
          ],
        ),
      ),
    );
  }
}

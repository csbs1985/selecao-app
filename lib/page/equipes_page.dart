import 'package:flutter/material.dart';
import 'package:selecao_app/appbar/padrao_appbar.dart';
import 'package:selecao_app/button/texto_button.dart';
import 'package:selecao_app/class/selecionar_class.dart';
import 'package:selecao_app/config/string_config.dart';
import 'package:selecao_app/dialog/simples_dialog.dart';
import 'package:selecao_app/text/title_medium_text.dart';
import 'package:selecao_app/theme/ui_cor.dart';

class EquipesPage extends StatefulWidget {
  const EquipesPage({super.key});

  @override
  State<EquipesPage> createState() => _EquipesPageState();
}

class _EquipesPageState extends State<EquipesPage> {
  final SelecionarClass _selecionarClass = SelecionarClass();

  List<List<String>> _equipes = [];
  int index = 0;

  @override
  void initState() {
    _separarEquipes();
    super.initState();
  }

  void _separarEquipes() {
    setState(() => _equipes = _selecionarClass.separarEquipes());
  }

  Future<void> _showAlertDialog() async {
    return showDialog<void>(
      context: context,
      barrierDismissible: true,
      builder: (BuildContext context) {
        return const SimplesDialog(
          titulo: COMO_USAR,
          texto: EQUIPES_INSTRUCAO,
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(toolbarHeight: 0),
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            PadraoAppbar(
              callback: () => _showAlertDialog(),
              texto: EQUIPES_SELECIONADA,
            ),
            const Padding(
              padding: EdgeInsets.all(16),
              child: TitleMediumText(
                cor: UiCor.principal,
                texto: EQUIPES_TITULO,
              ),
            ),
            Wrap(
              children: [
                for (var item in _equipes)
                  Container(
                    width: MediaQuery.sizeOf(context).width * 0.5,
                    color: _selecionarClass.definirCor(),
                    padding: const EdgeInsets.all(16),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        for (var nome in item)
                          Text(
                            nome.toUpperCase(),
                            style: const TextStyle(
                              color: Color(0xFF0C2D54),
                              fontSize: 16,
                              fontWeight: FontWeight.bold,
                            ),
                          )
                      ],
                    ),
                  ),
              ],
            ),
            TextoButton(
              cor: UiCor.principal,
              callback: () => _separarEquipes(),
              texto: EQUIPES_NOVAMENTE,
            ),
          ],
        ),
      ),
    );
  }
}

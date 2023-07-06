import 'package:flutter/material.dart';
import 'package:selecao_app/appbar/padrao_appbar.dart';
import 'package:selecao_app/button/texto_button.dart';
import 'package:selecao_app/class/selecionar_class.dart';
import 'package:selecao_app/config/string_config.dart';
import 'package:selecao_app/widget/info_widget.dart';

class TimesPage extends StatefulWidget {
  const TimesPage({super.key});

  @override
  State<TimesPage> createState() => _TimesPageState();
}

class _TimesPageState extends State<TimesPage> {
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

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(toolbarHeight: 0),
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            PadraoAppbar(callback: () => {}),
            const InfoWidget(isToggle: true),
            const Padding(
              padding: EdgeInsets.all(16),
              child: Text(
                TIMES_TITULO,
                style: TextStyle(
                  color: Color(0xFF00D691),
                  fontSize: 24,
                  fontWeight: FontWeight.normal,
                ),
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
              cor: const Color(0xFF1CF559),
              callback: () => _separarEquipes(),
              texto: TIMES_NOVAMENTE,
            ),
          ],
        ),
      ),
    );
  }
}

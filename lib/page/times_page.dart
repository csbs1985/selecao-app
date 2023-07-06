import 'package:flutter/material.dart';
import 'package:selecao_app/appbar/padrao_appbar.dart';
import 'package:selecao_app/class/selecionar_class.dart';
import 'package:selecao_app/config/string_config.dart';

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
    _equipes = _selecionarClass.separarEquipes();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: PadraoAppbar(callback: () => {}),
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
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
              children: _equipes.map((grupo) {
                setState(() => index + 1);

                return Container(
                  color: _selecionarClass.definirCor(index),
                  width: MediaQuery.sizeOf(context).width / 2,
                  padding: const EdgeInsets.all(16),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: grupo
                        .map((string) => Text(
                              string.toUpperCase(),
                              style: const TextStyle(
                                color: Color(0xFF0C2D54),
                                fontSize: 16,
                                fontWeight: FontWeight.normal,
                              ),
                            ))
                        .toList(),
                  ),
                );
              }).toList(),
            ),
          ],
        ),
      ),
    );
  }
}

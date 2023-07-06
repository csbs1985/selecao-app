import 'package:flutter/material.dart';
import 'package:selecao_app/appbar/padrao_appbar.dart';
import 'package:selecao_app/button/segundo_button.dart';
import 'package:selecao_app/config/string_config.dart';
import 'package:selecao_app/dialog/simples_dialog.dart';
import 'package:selecao_app/theme/ui_cor.dart';

class PlacarPage extends StatefulWidget {
  const PlacarPage({super.key});

  @override
  State<PlacarPage> createState() => _PlacarPageState();
}

class _PlacarPageState extends State<PlacarPage> {
  Future<void> _dialogInfo() async {
    return showDialog<void>(
      context: context,
      barrierDismissible: true,
      builder: (BuildContext context) {
        return const SimplesDialog(
          titulo: COMO_USAR,
          texto: PLACAR_INSTRUCAO,
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    final width = MediaQuery.sizeOf(context).width;
    final sizeIcone = width / 6;
    final sizeMetade = (width / 2) - 4;
    const espaco = 8.0;

    return Scaffold(
      appBar: AppBar(toolbarHeight: 0),
      body: SingleChildScrollView(
        child: Column(
          children: [
            PadraoAppbar(callback: () => _dialogInfo()),
            Row(
              children: [
                Container(
                  width: sizeMetade,
                  color: UiCor.display,
                  padding: const EdgeInsets.all(16),
                  child: const Center(
                    child: Text(
                      '2° tempo',
                      style: TextStyle(
                        color: UiCor.periodo,
                        fontSize: 24,
                        fontWeight: FontWeight.normal,
                        fontFamily: 'display',
                      ),
                    ),
                  ),
                ),
                const SizedBox(width: espaco),
                Container(
                  width: sizeMetade,
                  color: UiCor.display,
                  padding: const EdgeInsets.all(16),
                  child: const Center(
                    child: Text(
                      '16:33:00',
                      style: TextStyle(
                        color: UiCor.tempo,
                        fontSize: 24,
                        fontWeight: FontWeight.normal,
                        fontFamily: 'display',
                      ),
                    ),
                  ),
                )
              ],
            ),
            const SizedBox(height: espaco),
            Row(
              children: [
                Container(
                  width: sizeMetade,
                  color: UiCor.display,
                  padding: const EdgeInsets.all(16),
                  child: const Center(
                    child: Text(
                      'São Paulo',
                      style: TextStyle(
                        color: UiCor.mandante,
                        fontSize: 24,
                        fontWeight: FontWeight.normal,
                        fontFamily: 'display',
                      ),
                    ),
                  ),
                ),
                const SizedBox(width: espaco),
                Container(
                  width: sizeMetade,
                  color: UiCor.display,
                  padding: const EdgeInsets.all(16),
                  child: const Center(
                    child: Text(
                      'Palmeiras',
                      style: TextStyle(
                        color: UiCor.visitante,
                        fontSize: 24,
                        fontWeight: FontWeight.normal,
                        fontFamily: 'display',
                      ),
                    ),
                  ),
                )
              ],
            ),
            const SizedBox(height: espaco),
            Row(
              children: [
                Container(
                  width: sizeMetade,
                  color: UiCor.display,
                  padding: const EdgeInsets.all(16),
                  child: const Center(
                    child: Text(
                      '1',
                      style: TextStyle(
                        color: UiCor.mandante,
                        fontSize: 120,
                        fontFamily: 'display',
                        fontWeight: FontWeight.normal,
                      ),
                    ),
                  ),
                ),
                const SizedBox(width: espaco),
                Container(
                  width: sizeMetade,
                  color: UiCor.display,
                  padding: const EdgeInsets.all(16),
                  child: const Center(
                    child: Text(
                      '0',
                      style: TextStyle(
                        color: UiCor.visitante,
                        fontSize: 120,
                        fontWeight: FontWeight.normal,
                        fontFamily: 'display',
                      ),
                    ),
                  ),
                )
              ],
            ),
            const SizedBox(height: espaco),
            Row(
              children: [
                SegundoButton(
                  callback: () => {},
                  cor: UiCor.periodo,
                  icone: Icons.timer,
                  size: sizeIcone,
                ),
                SegundoButton(
                  callback: () => {},
                  cor: UiCor.tempo,
                  icone: Icons.play_arrow,
                  size: sizeIcone,
                ),
                SegundoButton(
                  callback: () => {},
                  cor: UiCor.tempo,
                  icone: Icons.pause,
                  size: sizeIcone,
                ),
                SegundoButton(
                  callback: () => {},
                  cor: UiCor.tempo,
                  icone: Icons.stop,
                  size: sizeIcone,
                ),
                SegundoButton(
                  callback: () => {},
                  cor: UiCor.linha,
                  icone: Icons.scoreboard,
                  size: sizeIcone,
                ),
                SegundoButton(
                  callback: () => {},
                  cor: const Color(0xFFFFFFFF),
                  icone: Icons.settings,
                  size: sizeIcone,
                ),
              ],
            ),
            Row(
              children: [
                SegundoButton(
                  callback: () => {},
                  cor: UiCor.mandante,
                  duplo: true,
                  icone: Icons.plus_one,
                  size: sizeIcone,
                ),
                SegundoButton(
                  callback: () => {},
                  cor: UiCor.mandante,
                  icone: Icons.remove,
                  size: sizeIcone,
                ),
                SegundoButton(
                  callback: () => {},
                  cor: UiCor.visitante,
                  icone: Icons.remove,
                  size: sizeIcone,
                ),
                SegundoButton(
                  callback: () => {},
                  cor: UiCor.visitante,
                  duplo: true,
                  icone: Icons.plus_one,
                  size: sizeIcone,
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

import 'package:flutter/material.dart';
import 'package:selecao_app/appbar/padrao_appbar.dart';
import 'package:selecao_app/button/segundo_button.dart';

class PlacarPage extends StatefulWidget {
  const PlacarPage({super.key});

  @override
  State<PlacarPage> createState() => _PlacarPageState();
}

class _PlacarPageState extends State<PlacarPage> {
  @override
  Widget build(BuildContext context) {
    final width = MediaQuery.sizeOf(context).width;
    final size = width / 6;

    return Scaffold(
      appBar: PadraoAppbar(callback: () => {}),
      body: SingleChildScrollView(
        child: Column(
          children: [
            Row(
              children: [
                SegundoButton(
                  callback: () => {},
                  cor: const Color(0xFF1CF559),
                  icone: Icons.timer,
                  size: size,
                ),
                SegundoButton(
                  callback: () => {},
                  cor: const Color(0xffC8B7F3),
                  icone: Icons.play_arrow,
                  size: size,
                ),
                SegundoButton(
                  callback: () => {},
                  cor: const Color(0xffC8B7F3),
                  icone: Icons.pause,
                  size: size,
                ),
                SegundoButton(
                  callback: () => {},
                  cor: const Color(0xffC8B7F3),
                  icone: Icons.stop,
                  size: size,
                ),
                SegundoButton(
                  callback: () => {},
                  cor: const Color(0xFFFFFFFF),
                  icone: Icons.scoreboard,
                  size: size,
                ),
                SegundoButton(
                  callback: () => {},
                  cor: const Color(0xffC8F51B),
                  icone: Icons.settings,
                  size: size,
                ),
              ],
            ),
            Row(
              children: [
                SegundoButton(
                  callback: () => {},
                  cor: const Color(0xFFFCD45C),
                  duplo: true,
                  icone: Icons.plus_one,
                  size: size,
                ),
                SegundoButton(
                  callback: () => {},
                  cor: const Color(0xFFFCD45C),
                  icone: Icons.remove,
                  size: size,
                ),
                SegundoButton(
                  callback: () => {},
                  cor: const Color(0xFFDA714F),
                  icone: Icons.remove,
                  size: size,
                ),
                SegundoButton(
                  callback: () => {},
                  cor: const Color(0xFFDA714F),
                  duplo: true,
                  icone: Icons.plus_one,
                  size: size,
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

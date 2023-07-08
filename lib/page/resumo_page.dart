import 'package:flutter/material.dart';
import 'package:selecao_app/appbar/voltar_appbar.dart';
import 'package:selecao_app/config/string_config.dart';
import 'package:selecao_app/theme/ui_cor.dart';

class ResumoPage extends StatefulWidget {
  const ResumoPage({super.key});

  @override
  State<ResumoPage> createState() => PartidarPageState();
}

class PartidarPageState extends State<ResumoPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(toolbarHeight: 0),
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const VoltarAppbar(texto: Resumo),
            Container(
              width: double.infinity,
              color: UiCor.display,
              padding: const EdgeInsets.all(16),
              child: const Center(
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text(
                      "São Paulo 1",
                      style: TextStyle(
                        overflow: TextOverflow.ellipsis,
                        color: UiCor.mandante,
                        fontSize: 24,
                        fontWeight: FontWeight.normal,
                        fontFamily: 'display',
                      ),
                    ),
                    Text(
                      " - ",
                      style: TextStyle(
                        overflow: TextOverflow.ellipsis,
                        color: Colors.white,
                        fontSize: 24,
                        fontWeight: FontWeight.normal,
                        fontFamily: 'display',
                      ),
                    ),
                    Text(
                      "0 Palmeiras",
                      style: TextStyle(
                        overflow: TextOverflow.ellipsis,
                        color: UiCor.visitante,
                        fontSize: 24,
                        fontWeight: FontWeight.normal,
                        fontFamily: 'display',
                      ),
                    ),
                  ],
                ),
              ),
            ),
            Container(
              height: 1000,
            )
          ],
        ),
      ),
    );
  }
}

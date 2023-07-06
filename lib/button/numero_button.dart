import 'package:flutter/material.dart';
import 'package:selecao_app/config/string_config.dart';
import 'package:selecao_app/config/value_notifier_config.dart';
import 'package:selecao_app/theme/ui_cor.dart';

class NumeroButton extends StatefulWidget {
  const NumeroButton({
    super.key,
    required Function callback,
  }) : _callback = callback;

  final Function _callback;

  @override
  State<NumeroButton> createState() => _NumeroButtonState();
}

class _NumeroButtonState extends State<NumeroButton> {
  final List<String> listaNumero = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11'
  ];

  _selecionarNumero(String numero) {
    setState(() => currentNumEquipe.value = numero);
    widget._callback(currentNumEquipe.value);
  }

  bool _verificarNumero(String numero) {
    return currentNumEquipe.value == numero ? true : false;
  }

  @override
  Widget build(BuildContext context) {
    final width = MediaQuery.sizeOf(context).width;
    final sizeWidth = width / 5;

    return Column(
      children: [
        const Padding(
          padding: EdgeInsets.all(16),
          child: Center(
            child: Text(
              SELECIONAR_NUMERO,
              style: TextStyle(
                color: Color(0xFFd0c6fb),
                fontSize: 24,
                fontWeight: FontWeight.normal,
              ),
            ),
          ),
        ),
        Wrap(
          children: [
            for (var item in listaNumero)
              GestureDetector(
                onTap: () => _selecionarNumero(item),
                child: Container(
                  color: _verificarNumero(item)
                      ? const Color(0xFF1CF559)
                      : const Color(0xFFd0c6fb),
                  width: sizeWidth,
                  height: sizeWidth,
                  child: Center(
                    child: Text(
                      item,
                      style: const TextStyle(
                        color: UiCor.displayLarge,
                        fontSize: 32,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                ),
              ),
          ],
        )
      ],
    );
  }
}

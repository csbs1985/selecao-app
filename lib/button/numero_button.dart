import 'package:flutter/material.dart';
import 'package:selecao_app/text/title_medium_text.dart';
import 'package:selecao_app/theme/ui_cor.dart';

class NumeroButton extends StatefulWidget {
  const NumeroButton({
    super.key,
    required Function callback,
    required Color cor,
    required int inicial,
    required List<int> lista,
    double? size,
    required String texto,
  })  : _callback = callback,
        _cor = cor,
        _inicial = inicial,
        _lista = lista,
        _size = size,
        _texto = texto;

  final Function _callback;
  final Color _cor;
  final int _inicial;
  final List<int> _lista;
  final double? _size;
  final String _texto;

  @override
  State<NumeroButton> createState() => _NumeroButtonState();
}

class _NumeroButtonState extends State<NumeroButton> {
  int? selecionado;

  @override
  void initState() {
    super.initState();
    _selecionarNumero(widget._inicial);
  }

  _selecionarNumero(int numero) {
    setState(() => selecionado = numero);
    widget._callback(selecionado);
  }

  bool _verificarNumero(int numero) {
    return selecionado == numero ? true : false;
  }

  @override
  Widget build(BuildContext context) {
    final width = MediaQuery.sizeOf(context).width;
    final sizeWidth = width / 5;
    final fontSize = sizeWidth * 0.3;

    return Column(
      children: [
        Padding(
          padding: const EdgeInsets.all(16),
          child: TitleMediumText(
            cor: widget._cor,
            texto: widget._texto,
          ),
        ),
        SizedBox(
          width: double.infinity,
          child: Wrap(
            alignment: WrapAlignment.start,
            children: [
              for (var item in widget._lista)
                GestureDetector(
                  onTap: () => _selecionarNumero(item),
                  child: Container(
                    color: _verificarNumero(item)
                        ? widget._cor.withOpacity(0.7)
                        : widget._cor,
                    width: widget._size ?? sizeWidth,
                    height: widget._size ?? sizeWidth,
                    child: Center(
                      child: Text(
                        item.toString(),
                        style: TextStyle(
                          color: UiCor.fundo,
                          fontSize: fontSize,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ),
                  ),
                ),
            ],
          ),
        )
      ],
    );
  }
}

import 'package:flutter/material.dart';
import 'package:selecao_app/theme/ui_borda.dart';
import 'package:selecao_app/theme/ui_cor.dart';

class TextoInput extends StatefulWidget {
  const TextoInput({
    super.key,
    required Function callback,
    TextEditingController? controller,
    required Color cor,
    required String hint,
  })  : _callback = callback,
        _controller = controller,
        _cor = cor,
        _hint = hint;

  final Function _callback;
  final TextEditingController? _controller;
  final Color _cor;
  final String _hint;

  @override
  State<TextoInput> createState() => _JogadoresInputState();
}

class _JogadoresInputState extends State<TextoInput> {
  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      color: widget._cor,
      child: TextFormField(
        autofocus: false,
        controller: widget._controller,
        onChanged: (value) => setState(() => widget._callback(value)),
        maxLines: 1,
        textAlignVertical: TextAlignVertical.top,
        style: const TextStyle(
          color: UiCor.hint,
          fontSize: 16,
          fontWeight: FontWeight.normal,
        ),
        decoration: InputDecoration(
          hintText: widget._hint,
          filled: true,
          fillColor: widget._cor,
          hintStyle: const TextStyle(
            color: UiCor.hint,
            fontSize: 16,
            fontWeight: FontWeight.normal,
          ),
          contentPadding: const EdgeInsets.symmetric(
            horizontal: 16,
            vertical: 16,
          ),
          border: UiBorda.inputBorda,
          enabledBorder: UiBorda.inputBorda,
          focusedBorder: UiBorda.inputBorda,
        ),
      ),
    );
  }
}

import 'package:flutter/material.dart';
import 'package:selecao_app/button/primeiro_button.dart';
import 'package:selecao_app/config/string_config.dart';
import 'package:selecao_app/theme/ui_borda.dart';
import 'package:selecao_app/theme/ui_cor.dart';

class JogadoresInput extends StatefulWidget {
  const JogadoresInput({
    super.key,
    required Function callback,
  }) : _callback = callback;

  final Function _callback;

  @override
  State<JogadoresInput> createState() => _JogadoresInputState();
}

class _JogadoresInputState extends State<JogadoresInput> {
  final TextEditingController _controllerJogadores = TextEditingController();

  String _inputTexto = "";

  final List<String> _listaJogadores = [];

  void _separarPorVirgula() {
    if (_inputTexto.isNotEmpty) {
      if (_inputTexto.contains(',')) {
        List<String> jogadores = _inputTexto.split(',');
        setState(() => _listaJogadores.addAll(jogadores));
      } else {
        setState(() => _listaJogadores.add(_inputTexto));
      }
    }

    widget._callback(_listaJogadores);
    _controllerJogadores.clear();
    _inputTexto = "";
  }

  void _deletarJogador(String jogador) {
    setState(() => _listaJogadores.remove(jogador));
  }

  @override
  void dispose() {
    _controllerJogadores.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Padding(
          padding: const EdgeInsets.all(16),
          child: Center(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text(
                  SELECIONAR_TIME,
                  style: TextStyle(
                    color: Color(0xFF00D691),
                    fontSize: 24,
                    fontWeight: FontWeight.normal,
                  ),
                ),
                if (_listaJogadores.isNotEmpty)
                  Text(
                    '${_listaJogadores.length} $NOMES',
                    style: const TextStyle(
                      color: Color(0xFF00D691),
                      fontSize: 24,
                      fontWeight: FontWeight.normal,
                    ),
                  ),
              ],
            ),
          ),
        ),
        Container(
          width: double.infinity,
          color: const Color(0xFF00D691),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Container(
                padding: _listaJogadores.isEmpty
                    ? const EdgeInsets.all(0)
                    : const EdgeInsets.all(8),
                child: Wrap(
                  runSpacing: 8,
                  spacing: 8,
                  children: [
                    for (var item in _listaJogadores)
                      GestureDetector(
                        onTap: () => _deletarJogador(item),
                        child: Container(
                          padding: const EdgeInsets.fromLTRB(8, 8, 6, 8),
                          color: const Color(0xFF004751),
                          child: Row(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              Text(
                                item,
                                style: const TextStyle(
                                  color: Color(0xFF00D691),
                                  fontSize: 16,
                                  fontWeight: FontWeight.normal,
                                ),
                              ),
                              const SizedBox(width: 8),
                              const Icon(
                                Icons.close,
                                color: Color(0xFF00D691),
                              ),
                            ],
                          ),
                        ),
                      ),
                  ],
                ),
              ),
              Row(
                children: [
                  Expanded(
                    child: TextFormField(
                      autofocus: false,
                      controller: _controllerJogadores,
                      onChanged: (value) => setState(() => _inputTexto = value),
                      maxLines: 1,
                      textAlignVertical: TextAlignVertical.top,
                      decoration: InputDecoration(
                        prefixIconColor: UiCor.icone,
                        counterStyle: Theme.of(context).textTheme.headlineSmall,
                        hintText: SELECIONAR_VAZIO,
                        filled: true,
                        fillColor: const Color(0xFF00D691),
                        hintStyle: const TextStyle(
                          color: Color(0xFF004751),
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
                  ),
                  PrimeiroButton(
                    cor: const Color(0xFF00D691),
                    callback: () => _separarPorVirgula(),
                  ),
                ],
              ),
            ],
          ),
        ),
      ],
    );
  }
}

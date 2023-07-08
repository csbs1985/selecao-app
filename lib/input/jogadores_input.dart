import 'package:flutter/material.dart';
import 'package:selecao_app/button/primeiro_button.dart';
import 'package:selecao_app/config/string_config.dart';
import 'package:selecao_app/text/title_medium_text.dart';
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

        jogadores = jogadores
            .map((jogador) => jogador.trim())
            .where((jogador) => jogador.isNotEmpty)
            .toList();

        setState(() => _listaJogadores.addAll(jogadores));
      } else {
        String jogador = _inputTexto.trim();
        if (jogador.isNotEmpty) {
          setState(() => _listaJogadores.add(jogador));
        }
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
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Padding(
          padding: const EdgeInsets.all(16),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const TitleMediumText(
                cor: UiCor.jogador,
                texto: SELECIONAR_TIME,
              ),
              if (_listaJogadores.isNotEmpty)
                TitleMediumText(
                  texto:
                      '${_listaJogadores.length} ${_listaJogadores.length > 1 ? NOMES : NOME}',
                  cor: UiCor.jogador,
                ),
            ],
          ),
        ),
        Container(
          width: double.infinity,
          color: UiCor.jogador,
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
                          color: UiCor.tag,
                          child: Row(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              Text(
                                item.toUpperCase(),
                                style: const TextStyle(
                                  color: UiCor.jogador,
                                  fontSize: 16,
                                  fontWeight: FontWeight.normal,
                                ),
                              ),
                              const SizedBox(width: 8),
                              const Icon(
                                Icons.close,
                                color: UiCor.jogador,
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
                      style: const TextStyle(
                        color: UiCor.hint,
                        fontSize: 16,
                        fontWeight: FontWeight.normal,
                      ),
                      decoration: InputDecoration(
                        hintText: SELECIONAR_VAZIO,
                        filled: true,
                        fillColor: UiCor.jogador,
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
                  ),
                  PrimeiroButton(
                    cor: UiCor.jogador,
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

import 'package:flutter/widgets.dart';
import 'package:selecao_app/model/definir_model.dart';

ValueNotifier<List<String>> currentJogadores = ValueNotifier<List<String>>([]);

ValueNotifier<int> currentQuantidade = ValueNotifier<int>(5);

ValueNotifier<DefinirModel> currentDefinir = ValueNotifier<DefinirModel>(
  DefinirModel(
    mandante: "mandante",
    visitante: "visitante",
    tempo: 25,
    periodo: 1,
  ),
);

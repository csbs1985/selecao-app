import 'package:selecao_app/config/value_notifier_config.dart';

class PartidaClass {
  int alterarPeriodo(int atual) {
    int periodo = currentDefinir.value.periodo;

    if (atual < periodo) {
      atual++;
    } else {
      atual = 1;
    }

    return atual;
  }
}

enum TempoEnum {
  INICIAR('inicio'),
  PARAR('parar'),
  PAUSAR('pausar');

  final String value;
  const TempoEnum(this.value);
}

# Features

Cada pasta representa uma area funcional do produto. Prefira manter dominio, casos de uso, infraestrutura e apresentacao juntos dentro da propria feature.

Crie uma nova feature com:

```txt
feature-name/
  domain/
  application/
  infrastructure/
  presentation/
```

Evite importar uma feature diretamente de outra. Quando duas features precisam compartilhar algo, mova esse codigo para `src/shared` ou exponha uma API de aplicacao bem pequena.

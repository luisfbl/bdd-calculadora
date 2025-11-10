import subprocess
from pathlib import Path

from behave import given, when, then

WEB_DIR = Path(__file__).resolve().parents[2] / "web"
RUN_SCRIPT = "run_sequence.js"


def _run_sequence(sequence: str) -> str:
    result = subprocess.run(
        ["node", RUN_SCRIPT, sequence],
        cwd=WEB_DIR,
        capture_output=True,
        text=True,
        check=True,
    )
    return (result.stdout or "").strip() or "0"


@given("que a calculadora web foi carregada")
def step_load(context):
    context.sequence = ""
    context.display = "0"


@when('eu digito "{sequencia}"')
def step_type(context, sequencia: str):
    context.sequence = sequencia
    context.display = _run_sequence(sequencia)


@then('eu vejo "{esperado}" no visor')
def step_check(context, esperado: str):
    assert context.display == esperado, f"Esperado {esperado}, mas estava {context.display}"

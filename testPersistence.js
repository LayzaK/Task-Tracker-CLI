
import { loadTasks, saveTasks } from './src/services/persistenceUtils.js';

async function runPersistenceTests() {
    console.log("--- Starting Persistence Utility Tests ---");

    // TESTE 1: Tentar carregar tarefas quando o arquivo tasks.json não existe (ou está vazio).
    console.log("\n--- Test Case 1: Loading from non-existent/empty tasks.json ---");
    // Opcional: Para simular o arquivo não existindo, você pode deletar tasks.json manualmente agora.
    const initialTasks = await loadTasks();
    console.log("Loaded tasks (initially):", initialTasks); // Deve ser []

    // TESTE 2: Salvar algumas tarefas.
    console.log("\n--- Test Case 2: Saving new tasks ---");
    const newTasks = [
        { id: 1, description: "Learn JS modules", completed: false },
        { id: 2, description: "Build CLI tool", completed: false }
    ];
    await saveTasks(newTasks); // Salva estas tarefas no tasks.json
    console.log("Attempted to save new tasks.");

    // TESTE 3: Carregar as tarefas que acabamos de salvar para verificar se foram salvas corretamente.
    console.log("\n--- Test Case 3: Loading saved tasks ---");
    const loadedTasks = await loadTasks();
    console.log("Loaded tasks (after saving):", loadedTasks); // Deve mostrar as 2 tarefas

    // TESTE 4: Modificar as tarefas e salvar novamente.
    console.log("\n--- Test Case 4: Modifying and saving tasks ---");
    if (loadedTasks.length > 0) {
        loadedTasks[0].completed = true; // Marca a primeira tarefa como concluída
    }
    await saveTasks(loadedTasks);
    console.log("Attempted to modify and save tasks.");

    // TESTE 5: Carregar novamente para ver a modificação.
    console.log("\n--- Test Case 5: Loading modified tasks ---");
    const finalTasks = await loadTasks();
    console.log("Loaded tasks (after modification):", finalTasks); // A primeira tarefa deve estar 'completed: true'

    console.log("\n--- Persistence Utility Tests Finished ---");
}

// Chama a função de teste para executar.

runPersistenceTests();
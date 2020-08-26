// informa se o usuário entrou em contato com o professor

// clicar entrar em contato com o professor, no whatsapp 

import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();
        

        // Houve a conexão com qual professor? 
        table.integer('user_id')
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
        
        //Quando que a conexão foi criada
        table.timestamp('created_at')
        .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
        .notNullable();

    });
} 

// DESFAZ ALTERAÇÕES
export async function down(knex: Knex){
    return knex.schema.dropTable('connections');
}
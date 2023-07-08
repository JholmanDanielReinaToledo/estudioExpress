create table tarea (
  id bigserial unique,
  name text not null,
  titulo text not null,
  date timestamp default now()
);
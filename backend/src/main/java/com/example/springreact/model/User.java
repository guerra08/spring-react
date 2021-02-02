package com.example.springreact.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Getter
    @Setter
    private Long id;
    @Column(name = "name")
    @Getter
    @Setter
    private String name;
    @Column(name = "email")
    @Getter
    @Setter
    private String email;

}

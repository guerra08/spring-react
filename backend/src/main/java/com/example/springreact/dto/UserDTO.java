package com.example.springreact.dto;

import com.example.springreact.model.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
public class UserDTO{

    @Getter
    @Setter
    public String name;
    @Getter
    @Setter
    public String email;

    /**
     * Patches a given User entity with this DTO data
     * @param current The target User to be patched
     */
    public void patchUser(User current){
        current.setEmail(this.email);
        current.setName(this.name);
    }

}

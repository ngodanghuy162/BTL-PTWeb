package com.btlweb.server.FormatRequest;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UpdateAdminAccountFormat {
    private String username;
    private String password;
    private String name;
}

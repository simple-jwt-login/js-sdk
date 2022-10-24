export interface RegisterUserInterface {
  email: string;
  password: string;

  user_login: string | null;
  user_nicename: string | null;
  user_url: string | null;
  display_name: string | null;
  nickname: string | null;
  first_name: string | null;
  last_name: string | null;
  description: string | null;
  rich_editing: string | null;
  syntax_highlighting: string | null;
  comment_shortcuts: string | null;
  admin_color: string | null;
  use_ssl: boolean | null;
  user_registered: string | null;
  user_activation_key: string | null;
  spam: string | null;
  show_admin_bar_front: string | null;
  locale: string | null;

  user_meta: object | null;

  [key: string]: string | number | null | boolean | object;
}

import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../../hooks/useAut";

type Mode = "login" | "register" | "forgot";

export default function LoginLuxury() {
  const [mode, setMode] = useState<Mode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { loginWithEmail, loginWithGoogle, registerUser, resetPassword } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const state = location.state as { message?: string } | null;
    if (state?.message) {
      setSuccess(state.message);
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setName("");
    setError("");
    setSuccess("");
  };

  const switchMode = (newMode: Mode) => {
    resetForm();
    setMode(newMode);
  };

  const handleSubmitLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await loginWithEmail(email, password);
      navigate("/");
    } catch (err: any) {
      setError(err.message || "Error al iniciar sesión");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("El nombre es obligatorio");
      return;
    }
    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    setLoading(true);
    try {
      await registerUser(email, password, name.trim());
      navigate("/");
    } catch (err: any) {
      setError(err.message || "Error al crear la cuenta");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitForgot = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      await resetPassword(email);
      setSuccess("Revisa tu correo para recuperar la contraseña");
    } catch (err: any) {
      setError(err.message || "Error al enviar el correo de recuperación");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setGoogleLoading(true);
    setError("");
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (err: any) {
      setError(err.message || "Error al iniciar sesión con Google");
    } finally {
      setGoogleLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: "12px",
    padding: "14px 16px",
    color: "#fff",
    fontSize: "15px",
    fontFamily: "system-ui, sans-serif",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s, background 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "12px",
    color: "rgba(255,255,255,0.4)",
    marginBottom: "8px",
    fontFamily: "system-ui, sans-serif",
    letterSpacing: "0.05em",
  };

  const onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.style.borderColor = "rgba(180,111,255,0.6)";
    e.target.style.background = "rgba(180,111,255,0.08)";
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.style.borderColor = "rgba(255,255,255,0.10)";
    e.target.style.background = "rgba(255,255,255,0.06)";
  };

  const linkStyle: React.CSSProperties = {
    color: "#b46fff",
    cursor: "pointer",
    fontFamily: "system-ui, sans-serif",
    fontSize: "13px",
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #1a0533 0%, #0d1b2a 50%, #0a2a1a 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Georgia', serif",
      position: "relative",
      overflow: "hidden",
    }}>
      {[
        { top: "-10%", left: "-5%", size: 500, color: "rgba(180,100,255,0.12)" },
        { top: "60%", right: "-10%", size: 400, color: "rgba(50,200,150,0.10)" },
        { top: "30%", left: "40%", size: 300, color: "rgba(100,150,255,0.08)" },
      ].map((blob, i) => (
        <div key={i} style={{
          position: "absolute",
          top: blob.top,
          left: blob.left,
          right: (blob as any).right,
          width: blob.size,
          height: blob.size,
          borderRadius: "50%",
          background: blob.color,
          filter: "blur(80px)",
          pointerEvents: "none",
        }} />
      ))}

      <div style={{
        width: "100%",
        maxWidth: "420px",
        margin: "2rem",
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: "1px solid rgba(255,255,255,0.10)",
        borderRadius: "24px",
        padding: "3rem",
        position: "relative",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "2.5rem" }}>
          <div style={{
            width: "36px", height: "36px", borderRadius: "10px",
            background: "linear-gradient(135deg, #b46fff, #5b8fff)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", letterSpacing: "0.05em" }}>
            Espacio Privado
          </span>
        </div>

        {error && (
          <div style={{
            background: "rgba(239,68,68,0.15)",
            border: "1px solid rgba(239,68,68,0.3)",
            borderRadius: "10px",
            padding: "12px 16px",
            marginBottom: "1.5rem",
            color: "#fca5a5",
            fontSize: "13px",
            fontFamily: "system-ui, sans-serif",
          }}>
            {error}
          </div>
        )}

        {success && (
          <div style={{
            background: "rgba(34,197,94,0.15)",
            border: "1px solid rgba(34,197,94,0.3)",
            borderRadius: "10px",
            padding: "12px 16px",
            marginBottom: "1.5rem",
            color: "#86efac",
            fontSize: "13px",
            fontFamily: "system-ui, sans-serif",
          }}>
            {success}
          </div>
        )}

        {/* ========== MODO LOGIN ========== */}
        {mode === "login" && (
          <>
            <h1 style={{
              fontSize: "2rem", fontWeight: 400, color: "#fff",
              margin: "0 0 0.5rem 0", letterSpacing: "-0.02em", lineHeight: 1.2,
            }}>
              Bienvenido<br />de vuelta.
            </h1>
            <p style={{
              color: "rgba(255,255,255,0.35)", fontSize: "14px",
              margin: "0 0 2rem 0", fontFamily: "system-ui, sans-serif",
            }}>
              Ingresa tus credenciales para continuar
            </p>

            <button
              onClick={handleGoogle}
              disabled={googleLoading}
              style={{
                width: "100%",
                background: googleLoading ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.13)",
                borderRadius: "12px",
                padding: "14px 16px",
                color: "#fff",
                fontSize: "14px",
                fontFamily: "system-ui, sans-serif",
                cursor: googleLoading ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                marginBottom: "1.5rem",
                transition: "background 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                if (!googleLoading) {
                  (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.12)";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.22)";
                }
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.13)";
              }}
            >
              {googleLoading ? (
                <span style={{
                  width: "16px", height: "16px",
                  border: "2px solid rgba(255,255,255,0.2)",
                  borderTopColor: "#fff",
                  borderRadius: "50%",
                  display: "inline-block",
                  animation: "spin 0.8s linear infinite",
                }} />
              ) : (
                <svg width="18" height="18" viewBox="0 0 48 48">
                  <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.6-.4-3.9z"/>
                  <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 15.8 18.9 12 24 12c3.1 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
                  <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.3 35.2 26.8 36 24 36c-5.2 0-9.7-3.3-11.3-8H6.1C9.5 35.6 16.3 44 24 44z"/>
                  <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.3 4.1-4.2 5.5l6.2 5.2C37 38.3 44 33 44 24c0-1.3-.1-2.6-.4-3.9z"/>
                </svg>
              )}
              <span>{googleLoading ? "Conectando..." : "Continuar con Google"}</span>
            </button>

            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.5rem" }}>
              <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.08)" }} />
              <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "12px", fontFamily: "system-ui" }}>
                o con correo
              </span>
              <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.08)" }} />
            </div>

            <form onSubmit={handleSubmitLogin}>
              <div style={{ marginBottom: "1rem" }}>
                <label style={labelStyle}>Correo electrónico</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={inputStyle}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  placeholder="tu@correo.com"
                />
              </div>

              <div style={{ marginBottom: "0.5rem", position: "relative" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <label style={{ ...labelStyle, marginBottom: 0 }}>Contraseña</label>
                  <span
                    style={linkStyle}
                    onClick={() => switchMode("forgot")}
                  >
                    ¿Olvidaste tu clave?
                  </span>
                </div>
                <input
                  type={showPass ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{ ...inputStyle, paddingRight: "48px" }}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  style={{
                    position: "absolute", right: "14px", bottom: "14px",
                    background: "none", border: "none", cursor: "pointer",
                    color: "rgba(255,255,255,0.3)", fontSize: "18px", padding: 0, lineHeight: 1,
                  }}
                >
                  {showPass ? "🙈" : "👁"}
                </button>
              </div>

              <div style={{ marginBottom: "1.5rem" }} />

              <button
                type="submit"
                disabled={loading}
                style={{
                  width: "100%",
                  background: loading ? "rgba(180,111,255,0.3)" : "linear-gradient(135deg, #b46fff, #5b8fff)",
                  border: "none", borderRadius: "12px", padding: "16px",
                  color: "#fff", fontSize: "15px", fontWeight: 500,
                  fontFamily: "system-ui, sans-serif",
                  cursor: loading ? "not-allowed" : "pointer",
                  letterSpacing: "0.02em", transition: "opacity 0.2s",
                }}
              >
                {loading ? (
                  <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                    <span style={{
                      width: "16px", height: "16px",
                      border: "2px solid rgba(255,255,255,0.3)",
                      borderTopColor: "#fff", borderRadius: "50%",
                      display: "inline-block", animation: "spin 0.8s linear infinite",
                    }} />
                    Verificando...
                  </span>
                ) : "Iniciar sesión"}
              </button>

              <div style={{ marginTop: "1.5rem", textAlign: "center", fontFamily: "system-ui, sans-serif" }}>
                <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "13px" }}>
                  ¿No tienes cuenta?{" "}
                  <span style={linkStyle} onClick={() => switchMode("register")}>
                    Regístrate aquí
                  </span>
                </span>
              </div>
            </form>
          </>
        )}

        {/* ========== MODO REGISTER ========== */}
        {mode === "register" && (
          <>
            <h1 style={{
              fontSize: "2rem", fontWeight: 400, color: "#fff",
              margin: "0 0 0.5rem 0", letterSpacing: "-0.02em", lineHeight: 1.2,
            }}>
              Crear cuenta
            </h1>
            <p style={{
              color: "rgba(255,255,255,0.35)", fontSize: "14px",
              margin: "0 0 2rem 0", fontFamily: "system-ui, sans-serif",
            }}>
              Completa los datos para registrarte
            </p>

            <form onSubmit={handleSubmitRegister}>
              <div style={{ marginBottom: "1rem" }}>
                <label style={labelStyle}>Nombre</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  style={inputStyle}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  placeholder="Tu nombre"
                />
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <label style={labelStyle}>Correo electrónico</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={inputStyle}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  placeholder="tu@correo.com"
                />
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <label style={labelStyle}>Contraseña</label>
                <input
                  type={showPass ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={inputStyle}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  placeholder="Mínimo 6 caracteres"
                />
              </div>

              <div style={{ marginBottom: "2rem" }}>
                <label style={labelStyle}>Confirmar contraseña</label>
                <input
                  type={showPass ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  style={inputStyle}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  placeholder="Repite tu contraseña"
                />
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "1.5rem" }}>
                <input
                  type="checkbox"
                  id="showPass"
                  checked={showPass}
                  onChange={(e) => setShowPass(e.target.checked)}
                  style={{ accentColor: "#b46fff" }}
                />
                <label htmlFor="showPass" style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", fontFamily: "system-ui, sans-serif", cursor: "pointer" }}>
                  Mostrar contraseñas
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                style={{
                  width: "100%",
                  background: loading ? "rgba(180,111,255,0.3)" : "linear-gradient(135deg, #b46fff, #5b8fff)",
                  border: "none", borderRadius: "12px", padding: "16px",
                  color: "#fff", fontSize: "15px", fontWeight: 500,
                  fontFamily: "system-ui, sans-serif",
                  cursor: loading ? "not-allowed" : "pointer",
                  letterSpacing: "0.02em", transition: "opacity 0.2s",
                }}
              >
                {loading ? (
                  <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                    <span style={{
                      width: "16px", height: "16px",
                      border: "2px solid rgba(255,255,255,0.3)",
                      borderTopColor: "#fff", borderRadius: "50%",
                      display: "inline-block", animation: "spin 0.8s linear infinite",
                    }} />
                    Creando cuenta...
                  </span>
                ) : "Crear cuenta"}
              </button>

              <div style={{ marginTop: "1.5rem", textAlign: "center", fontFamily: "system-ui, sans-serif" }}>
                <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "13px" }}>
                  ¿Ya tienes cuenta?{" "}
                  <span style={linkStyle} onClick={() => switchMode("login")}>
                    Inicia sesión
                  </span>
                </span>
              </div>
            </form>
          </>
        )}

        {/* ========== MODO FORGOT ========== */}
        {mode === "forgot" && (
          <>
            <h1 style={{
              fontSize: "2rem", fontWeight: 400, color: "#fff",
              margin: "0 0 0.5rem 0", letterSpacing: "-0.02em", lineHeight: 1.2,
            }}>
              Recuperar<br />contraseña
            </h1>
            <p style={{
              color: "rgba(255,255,255,0.35)", fontSize: "14px",
              margin: "0 0 2rem 0", fontFamily: "system-ui, sans-serif",
            }}>
              Ingresa tu correo y te enviaremos un enlace para restablecerla
            </p>

            <form onSubmit={handleSubmitForgot}>
              <div style={{ marginBottom: "2rem" }}>
                <label style={labelStyle}>Correo electrónico</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={inputStyle}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  placeholder="tu@correo.com"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                style={{
                  width: "100%",
                  background: loading ? "rgba(180,111,255,0.3)" : "linear-gradient(135deg, #b46fff, #5b8fff)",
                  border: "none", borderRadius: "12px", padding: "16px",
                  color: "#fff", fontSize: "15px", fontWeight: 500,
                  fontFamily: "system-ui, sans-serif",
                  cursor: loading ? "not-allowed" : "pointer",
                  letterSpacing: "0.02em", transition: "opacity 0.2s",
                }}
              >
                {loading ? (
                  <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                    <span style={{
                      width: "16px", height: "16px",
                      border: "2px solid rgba(255,255,255,0.3)",
                      borderTopColor: "#fff", borderRadius: "50%",
                      display: "inline-block", animation: "spin 0.8s linear infinite",
                    }} />
                    Enviando...
                  </span>
                ) : "Enviar enlace de recuperación"}
              </button>

              <div style={{ marginTop: "1.5rem", textAlign: "center", fontFamily: "system-ui, sans-serif" }}>
                <span style={linkStyle} onClick={() => switchMode("login")}>
                  ← Volver al inicio de sesión
                </span>
              </div>
            </form>
          </>
        )}
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}

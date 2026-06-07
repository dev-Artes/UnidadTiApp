import { useState } from "react";

export default function LoginLuxury() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    alert(`Bienvenido, ${email}`);
  };

  const handleGoogle = async () => {
    setGoogleLoading(true);
    // Aquí conectas con: signInWithPopup(auth, new GoogleAuthProvider())
    await new Promise((r) => setTimeout(r, 1500));
    setGoogleLoading(false);
    alert("Redirigiendo a Google OAuth...");
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
      {/* Ambient blobs */}
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

      {/* Card */}
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
        {/* Top badge */}
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

        {/* Google button */}
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
            /* Google SVG logo */
            <svg width="18" height="18" viewBox="0 0 48 48">
              <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.6-.4-3.9z"/>
              <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 15.8 18.9 12 24 12c3.1 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
              <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.3 35.2 26.8 36 24 36c-5.2 0-9.7-3.3-11.3-8H6.1C9.5 35.6 16.3 44 24 44z"/>
              <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.3 4.1-4.2 5.5l6.2 5.2C37 38.3 44 33 44 24c0-1.3-.1-2.6-.4-3.9z"/>
            </svg>
          )}
          <span>{googleLoading ? "Conectando..." : "Continuar con Google"}</span>
        </button>

        {/* Divider */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "1.5rem",
        }}>
          <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.08)" }} />
          <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "12px", fontFamily: "system-ui" }}>
            o con correo
          </span>
          <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.08)" }} />
        </div>

        <form onSubmit={handleSubmit}>
          {/* Email field */}
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

          {/* Password field */}
          <div style={{ marginBottom: "2rem", position: "relative" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
              <label style={{ ...labelStyle, marginBottom: 0 }}>Contraseña</label>
              <span style={{ fontSize: "12px", color: "rgba(180,111,255,0.8)", cursor: "pointer", fontFamily: "system-ui" }}>
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

          {/* Submit */}
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
              <span style={{ color: "#b46fff", cursor: "pointer" }}>Regístrate aquí</span>
            </span>
          </div>
        </form>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
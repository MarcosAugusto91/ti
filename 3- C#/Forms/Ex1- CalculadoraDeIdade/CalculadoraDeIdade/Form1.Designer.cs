namespace CalculadoraDeIdade
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            lblnome = new Label();
            lblidade = new Label();
            lblresultado = new Label();
            txtnome = new TextBox();
            txtidade = new TextBox();
            btncalcular = new Button();
            btnsair = new Button();
            lblResultado2 = new Label();
            lblPontos = new Label();
            SuspendLayout();
            // 
            // lblnome
            // 
            lblnome.AutoSize = true;
            lblnome.Location = new Point(41, 36);
            lblnome.Name = "lblnome";
            lblnome.Size = new Size(43, 15);
            lblnome.TabIndex = 0;
            lblnome.Text = "Nome:";
            // 
            // lblidade
            // 
            lblidade.AutoSize = true;
            lblidade.Location = new Point(41, 73);
            lblidade.Name = "lblidade";
            lblidade.Size = new Size(39, 15);
            lblidade.TabIndex = 1;
            lblidade.Text = "Idade:";
            // 
            // lblresultado
            // 
            lblresultado.AutoSize = true;
            lblresultado.Location = new Point(100, 171);
            lblresultado.Name = "lblresultado";
            lblresultado.Size = new Size(0, 15);
            lblresultado.TabIndex = 2;
            // 
            // txtnome
            // 
            txtnome.Location = new Point(85, 33);
            txtnome.Name = "txtnome";
            txtnome.Size = new Size(100, 23);
            txtnome.TabIndex = 3;
            // 
            // txtidade
            // 
            txtidade.Location = new Point(85, 70);
            txtidade.Name = "txtidade";
            txtidade.Size = new Size(100, 23);
            txtidade.TabIndex = 4;
            // 
            // btncalcular
            // 
            btncalcular.Location = new Point(30, 126);
            btncalcular.Name = "btncalcular";
            btncalcular.Size = new Size(75, 23);
            btncalcular.TabIndex = 5;
            btncalcular.Text = "Calcular";
            btncalcular.UseVisualStyleBackColor = true;
            btncalcular.Click += btncalcular_Click;
            // 
            // btnsair
            // 
            btnsair.Location = new Point(125, 126);
            btnsair.Name = "btnsair";
            btnsair.Size = new Size(75, 23);
            btnsair.TabIndex = 6;
            btnsair.Text = "Sair";
            btnsair.UseVisualStyleBackColor = true;
            btnsair.Click += btnsair_Click;
            // 
            // lblResultado2
            // 
            lblResultado2.AutoSize = true;
            lblResultado2.Location = new Point(48, 171);
            lblResultado2.Name = "lblResultado2";
            lblResultado2.Size = new Size(59, 15);
            lblResultado2.TabIndex = 7;
            lblResultado2.Text = "Resultado";
            // 
            // lblPontos
            // 
            lblPontos.AutoSize = true;
            lblPontos.Location = new Point(73, 187);
            lblPontos.Name = "lblPontos";
            lblPontos.Size = new Size(85, 15);
            lblPontos.TabIndex = 8;
            lblPontos.Text = "..........................";
            // 
            // Form1
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            BackColor = SystemColors.ActiveCaption;
            ClientSize = new Size(234, 211);
            Controls.Add(lblPontos);
            Controls.Add(lblResultado2);
            Controls.Add(btnsair);
            Controls.Add(btncalcular);
            Controls.Add(txtidade);
            Controls.Add(txtnome);
            Controls.Add(lblresultado);
            Controls.Add(lblidade);
            Controls.Add(lblnome);
            MaximumSize = new Size(250, 250);
            MinimumSize = new Size(250, 250);
            Name = "Form1";
            Text = "Form1";
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Label lblnome;
        private Label lblidade;
        private Label lblresultado;
        private TextBox txtnome;
        private TextBox txtidade;
        private Button btncalcular;
        private Button btnsair;
        private Label lblResultado2;
        private Label lblPontos;
    }
}
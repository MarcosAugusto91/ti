namespace Calculadora_de_Áreas
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
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form1));
            lbltitulo = new Label();
            rdbquadrado = new RadioButton();
            rdbretangulo = new RadioButton();
            rdbtriangulo = new RadioButton();
            rdbcirculo = new RadioButton();
            rdbtrapezio = new RadioButton();
            imgarea = new PictureBox();
            txt1 = new TextBox();
            txt2 = new TextBox();
            txt3 = new TextBox();
            lbl1 = new Label();
            lbl2 = new Label();
            lbl3 = new Label();
            lbldescricaoformula = new Label();
            label4 = new Label();
            label5 = new Label();
            lblresultado = new Label();
            lblexpressao = new Label();
            lblformula = new Label();
            btncalcular = new Button();
            ((System.ComponentModel.ISupportInitialize)imgarea).BeginInit();
            SuspendLayout();
            // 
            // lbltitulo
            // 
            lbltitulo.AllowDrop = true;
            lbltitulo.AutoSize = true;
            lbltitulo.Font = new Font("Segoe UI", 15F, FontStyle.Bold, GraphicsUnit.Point);
            lbltitulo.Location = new Point(12, 9);
            lbltitulo.Name = "lbltitulo";
            lbltitulo.Size = new Size(210, 33);
            lbltitulo.TabIndex = 0;
            lbltitulo.Text = "Calculadora de Áreas";
            lbltitulo.UseCompatibleTextRendering = true;
            lbltitulo.Click += label1_Click;
            // 
            // rdbquadrado
            // 
            rdbquadrado.AutoSize = true;
            rdbquadrado.Location = new Point(16, 45);
            rdbquadrado.Name = "rdbquadrado";
            rdbquadrado.Size = new Size(122, 19);
            rdbquadrado.TabIndex = 1;
            rdbquadrado.TabStop = true;
            rdbquadrado.Text = "Área do Quadrado";
            rdbquadrado.UseVisualStyleBackColor = true;
            rdbquadrado.CheckedChanged += rdbquadrado_CheckedChanged;
            // 
            // rdbretangulo
            // 
            rdbretangulo.AutoSize = true;
            rdbretangulo.Location = new Point(16, 70);
            rdbretangulo.Name = "rdbretangulo";
            rdbretangulo.Size = new Size(123, 19);
            rdbretangulo.TabIndex = 2;
            rdbretangulo.TabStop = true;
            rdbretangulo.Text = "Área do Retangulo";
            rdbretangulo.UseVisualStyleBackColor = true;
            rdbretangulo.CheckedChanged += rdbretangulo_CheckedChanged;
            // 
            // rdbtriangulo
            // 
            rdbtriangulo.AutoSize = true;
            rdbtriangulo.Location = new Point(16, 95);
            rdbtriangulo.Name = "rdbtriangulo";
            rdbtriangulo.Size = new Size(118, 19);
            rdbtriangulo.TabIndex = 3;
            rdbtriangulo.TabStop = true;
            rdbtriangulo.Text = "Área do Triângulo";
            rdbtriangulo.UseVisualStyleBackColor = true;
            rdbtriangulo.CheckedChanged += rdbtriangulo_CheckedChanged;
            // 
            // rdbcirculo
            // 
            rdbcirculo.AutoSize = true;
            rdbcirculo.Location = new Point(16, 120);
            rdbcirculo.Name = "rdbcirculo";
            rdbcirculo.Size = new Size(107, 19);
            rdbcirculo.TabIndex = 4;
            rdbcirculo.TabStop = true;
            rdbcirculo.Text = "Área do Círculo";
            rdbcirculo.UseVisualStyleBackColor = true;
            rdbcirculo.CheckedChanged += radioButton4_CheckedChanged;
            // 
            // rdbtrapezio
            // 
            rdbtrapezio.AutoSize = true;
            rdbtrapezio.Location = new Point(16, 145);
            rdbtrapezio.Name = "rdbtrapezio";
            rdbtrapezio.Size = new Size(112, 19);
            rdbtrapezio.TabIndex = 5;
            rdbtrapezio.TabStop = true;
            rdbtrapezio.Text = "Área do Trapézio";
            rdbtrapezio.UseVisualStyleBackColor = true;
            rdbtrapezio.CheckedChanged += rdbtrapezio_CheckedChanged;
            // 
            // imgarea
            // 
            imgarea.BackgroundImage = (Image)resources.GetObject("imgarea.BackgroundImage");
            imgarea.BackgroundImageLayout = ImageLayout.Stretch;
            imgarea.Image = Properties.Resources.quadrado;
            imgarea.Location = new Point(146, 45);
            imgarea.Name = "imgarea";
            imgarea.Size = new Size(227, 119);
            imgarea.SizeMode = PictureBoxSizeMode.StretchImage;
            imgarea.TabIndex = 6;
            imgarea.TabStop = false;
            // 
            // txt1
            // 
            txt1.Location = new Point(21, 274);
            txt1.Name = "txt1";
            txt1.Size = new Size(100, 23);
            txt1.TabIndex = 7;
            txt1.TextAlign = HorizontalAlignment.Center;
            // 
            // txt2
            // 
            txt2.Location = new Point(145, 274);
            txt2.Name = "txt2";
            txt2.Size = new Size(100, 23);
            txt2.TabIndex = 8;
            txt2.TextAlign = HorizontalAlignment.Center;
            // 
            // txt3
            // 
            txt3.Location = new Point(266, 274);
            txt3.Name = "txt3";
            txt3.Size = new Size(100, 23);
            txt3.TabIndex = 9;
            txt3.TextAlign = HorizontalAlignment.Center;
            // 
            // lbl1
            // 
            lbl1.AutoSize = true;
            lbl1.Location = new Point(48, 256);
            lbl1.Name = "lbl1";
            lbl1.Size = new Size(47, 15);
            lbl1.TabIndex = 10;
            lbl1.Text = "1º Valor";
            lbl1.Click += label1_Click_1;
            // 
            // lbl2
            // 
            lbl2.AutoSize = true;
            lbl2.Location = new Point(172, 256);
            lbl2.Name = "lbl2";
            lbl2.Size = new Size(47, 15);
            lbl2.TabIndex = 11;
            lbl2.Text = "2º Valor";
            lbl2.Click += label2_Click;
            // 
            // lbl3
            // 
            lbl3.AutoSize = true;
            lbl3.Location = new Point(292, 256);
            lbl3.Name = "lbl3";
            lbl3.Size = new Size(47, 15);
            lbl3.TabIndex = 12;
            lbl3.Text = "3º Valor";
            lbl3.Click += label3_Click;
            // 
            // lbldescricaoformula
            // 
            lbldescricaoformula.AutoSize = true;
            lbldescricaoformula.Font = new Font("Segoe UI", 12F, FontStyle.Bold, GraphicsUnit.Point);
            lbldescricaoformula.Location = new Point(154, 174);
            lbldescricaoformula.Name = "lbldescricaoformula";
            lbldescricaoformula.Size = new Size(77, 21);
            lbldescricaoformula.TabIndex = 13;
            lbldescricaoformula.Text = "Fórmula:";
            // 
            // label4
            // 
            label4.AutoSize = true;
            label4.Font = new Font("Segoe UI", 12F, FontStyle.Bold, GraphicsUnit.Point);
            label4.Location = new Point(53, 375);
            label4.Name = "label4";
            label4.Size = new Size(86, 21);
            label4.TabIndex = 14;
            label4.Text = "Resultado";
            // 
            // label5
            // 
            label5.AutoSize = true;
            label5.Font = new Font("Segoe UI", 12F, FontStyle.Bold, GraphicsUnit.Point);
            label5.Location = new Point(233, 375);
            label5.Name = "label5";
            label5.Size = new Size(86, 21);
            label5.TabIndex = 15;
            label5.Text = "Expressão";
            // 
            // lblresultado
            // 
            lblresultado.AutoSize = true;
            lblresultado.Font = new Font("Segoe UI", 12F, FontStyle.Regular, GraphicsUnit.Point);
            lblresultado.Location = new Point(67, 407);
            lblresultado.Name = "lblresultado";
            lblresultado.Size = new Size(52, 21);
            lblresultado.TabIndex = 16;
            lblresultado.Text = "label6";
            lblresultado.Visible = false;
            // 
            // lblexpressao
            // 
            lblexpressao.AutoSize = true;
            lblexpressao.Font = new Font("Segoe UI", 12F, FontStyle.Regular, GraphicsUnit.Point);
            lblexpressao.Location = new Point(237, 407);
            lblexpressao.Name = "lblexpressao";
            lblexpressao.Size = new Size(52, 21);
            lblexpressao.TabIndex = 17;
            lblexpressao.Text = "label7";
            lblexpressao.Visible = false;
            // 
            // lblformula
            // 
            lblformula.AutoSize = true;
            lblformula.Font = new Font("Segoe UI", 12F, FontStyle.Regular, GraphicsUnit.Point);
            lblformula.Location = new Point(233, 174);
            lblformula.Name = "lblformula";
            lblformula.Size = new Size(52, 21);
            lblformula.TabIndex = 18;
            lblformula.Text = "label8";
            lblformula.Visible = false;
            // 
            // btncalcular
            // 
            btncalcular.BackColor = SystemColors.ControlDarkDark;
            btncalcular.Font = new Font("Segoe UI", 9F, FontStyle.Bold, GraphicsUnit.Point);
            btncalcular.ForeColor = SystemColors.ControlLight;
            btncalcular.Location = new Point(145, 315);
            btncalcular.Name = "btncalcular";
            btncalcular.Size = new Size(100, 28);
            btncalcular.TabIndex = 19;
            btncalcular.Text = "Calcular";
            btncalcular.UseVisualStyleBackColor = false;
            btncalcular.Click += button1_Click;
            // 
            // Form1
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            BackColor = Color.SeaGreen;
            ClientSize = new Size(384, 461);
            Controls.Add(btncalcular);
            Controls.Add(lblformula);
            Controls.Add(lblexpressao);
            Controls.Add(lblresultado);
            Controls.Add(label5);
            Controls.Add(label4);
            Controls.Add(lbldescricaoformula);
            Controls.Add(lbl3);
            Controls.Add(lbl2);
            Controls.Add(lbl1);
            Controls.Add(txt3);
            Controls.Add(txt2);
            Controls.Add(txt1);
            Controls.Add(imgarea);
            Controls.Add(rdbtrapezio);
            Controls.Add(rdbcirculo);
            Controls.Add(rdbtriangulo);
            Controls.Add(rdbretangulo);
            Controls.Add(rdbquadrado);
            Controls.Add(lbltitulo);
            MaximumSize = new Size(400, 500);
            MinimumSize = new Size(400, 500);
            Name = "Form1";
            Text = "Form1";
            ((System.ComponentModel.ISupportInitialize)imgarea).EndInit();
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Label lbltitulo;
        private RadioButton rdbquadrado;
        private RadioButton rdbretangulo;
        private RadioButton rdbtriangulo;
        private RadioButton rdbcirculo;
        private RadioButton rdbtrapezio;
        private PictureBox imgarea;
        private TextBox txt1;
        private TextBox txt2;
        private TextBox txt3;
        private Label lbl1;
        private Label lbl2;
        private Label lbl3;
        private Label lbldescricaoformula;
        private Label label4;
        private Label label5;
        private Label lblresultado;
        private Label lblexpressao;
        private Label lblformula;
        private Button btncalcular;
    }
}
namespace calculadoraRadioButton
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
            label1 = new Label();
            label2 = new Label();
            txtOpA = new TextBox();
            txtOpB = new TextBox();
            rdbAdicao = new RadioButton();
            rdbSubtracao = new RadioButton();
            rdbMultiplicacao = new RadioButton();
            rdbDivisao = new RadioButton();
            rdbResto = new RadioButton();
            btnCalcular = new Button();
            label3 = new Label();
            txtExpressao = new TextBox();
            label4 = new Label();
            txtResultado = new TextBox();
            btnSair = new Button();
            SuspendLayout();
            // 
            // label1
            // 
            label1.AutoSize = true;
            label1.Location = new Point(55, 29);
            label1.Name = "label1";
            label1.Size = new Size(68, 15);
            label1.TabIndex = 0;
            label1.Text = "Operador A";
            // 
            // label2
            // 
            label2.AutoSize = true;
            label2.Location = new Point(217, 29);
            label2.Name = "label2";
            label2.Size = new Size(67, 15);
            label2.TabIndex = 1;
            label2.Text = "Operador B";
            // 
            // txtOpA
            // 
            txtOpA.Location = new Point(55, 47);
            txtOpA.Name = "txtOpA";
            txtOpA.Size = new Size(100, 23);
            txtOpA.TabIndex = 2;
            // 
            // txtOpB
            // 
            txtOpB.Location = new Point(184, 47);
            txtOpB.Name = "txtOpB";
            txtOpB.Size = new Size(100, 23);
            txtOpB.TabIndex = 3;
            // 
            // rdbAdicao
            // 
            rdbAdicao.AutoSize = true;
            rdbAdicao.Location = new Point(119, 117);
            rdbAdicao.Name = "rdbAdicao";
            rdbAdicao.Size = new Size(62, 19);
            rdbAdicao.TabIndex = 4;
            rdbAdicao.TabStop = true;
            rdbAdicao.Text = "&Adição";
            rdbAdicao.UseVisualStyleBackColor = true;
            // 
            // rdbSubtracao
            // 
            rdbSubtracao.AutoSize = true;
            rdbSubtracao.Location = new Point(119, 142);
            rdbSubtracao.Name = "rdbSubtracao";
            rdbSubtracao.Size = new Size(78, 19);
            rdbSubtracao.TabIndex = 5;
            rdbSubtracao.TabStop = true;
            rdbSubtracao.Text = "S&ubtração";
            rdbSubtracao.UseVisualStyleBackColor = true;
            // 
            // rdbMultiplicacao
            // 
            rdbMultiplicacao.AutoSize = true;
            rdbMultiplicacao.Location = new Point(119, 167);
            rdbMultiplicacao.Name = "rdbMultiplicacao";
            rdbMultiplicacao.Size = new Size(97, 19);
            rdbMultiplicacao.TabIndex = 6;
            rdbMultiplicacao.TabStop = true;
            rdbMultiplicacao.Text = "&Multiplicação";
            rdbMultiplicacao.UseVisualStyleBackColor = true;
            // 
            // rdbDivisao
            // 
            rdbDivisao.AutoSize = true;
            rdbDivisao.Location = new Point(119, 192);
            rdbDivisao.Name = "rdbDivisao";
            rdbDivisao.Size = new Size(63, 19);
            rdbDivisao.TabIndex = 7;
            rdbDivisao.TabStop = true;
            rdbDivisao.Text = "&Divisão";
            rdbDivisao.UseVisualStyleBackColor = true;
            // 
            // rdbResto
            // 
            rdbResto.AutoSize = true;
            rdbResto.Location = new Point(119, 217);
            rdbResto.Name = "rdbResto";
            rdbResto.Size = new Size(54, 19);
            rdbResto.TabIndex = 8;
            rdbResto.TabStop = true;
            rdbResto.Text = "&Resto";
            rdbResto.UseVisualStyleBackColor = true;
            // 
            // btnCalcular
            // 
            btnCalcular.BackColor = SystemColors.GradientActiveCaption;
            btnCalcular.Location = new Point(128, 279);
            btnCalcular.Name = "btnCalcular";
            btnCalcular.Size = new Size(75, 23);
            btnCalcular.TabIndex = 9;
            btnCalcular.Text = "&Calcular";
            btnCalcular.UseVisualStyleBackColor = false;
            btnCalcular.Click += btnCalcular_Click;
            // 
            // label3
            // 
            label3.AutoSize = true;
            label3.Location = new Point(55, 323);
            label3.Name = "label3";
            label3.Size = new Size(59, 15);
            label3.TabIndex = 10;
            label3.Text = "Expressão";
            // 
            // txtExpressao
            // 
            txtExpressao.Location = new Point(119, 320);
            txtExpressao.Name = "txtExpressao";
            txtExpressao.Size = new Size(100, 23);
            txtExpressao.TabIndex = 11;
            // 
            // label4
            // 
            label4.AutoSize = true;
            label4.Location = new Point(54, 362);
            label4.Name = "label4";
            label4.Size = new Size(59, 15);
            label4.TabIndex = 12;
            label4.Text = "Resultado";
            label4.Click += label4_Click;
            // 
            // txtResultado
            // 
            txtResultado.Location = new Point(119, 359);
            txtResultado.Name = "txtResultado";
            txtResultado.Size = new Size(100, 23);
            txtResultado.TabIndex = 13;
            // 
            // btnSair
            // 
            btnSair.Location = new Point(260, 396);
            btnSair.Name = "btnSair";
            btnSair.Size = new Size(75, 23);
            btnSair.TabIndex = 14;
            btnSair.Text = "&Sair";
            btnSair.UseVisualStyleBackColor = true;
            btnSair.Click += btnSair_Click;
            // 
            // Form1
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(347, 431);
            Controls.Add(btnSair);
            Controls.Add(txtResultado);
            Controls.Add(label4);
            Controls.Add(txtExpressao);
            Controls.Add(label3);
            Controls.Add(btnCalcular);
            Controls.Add(rdbResto);
            Controls.Add(rdbDivisao);
            Controls.Add(rdbMultiplicacao);
            Controls.Add(rdbSubtracao);
            Controls.Add(rdbAdicao);
            Controls.Add(txtOpB);
            Controls.Add(txtOpA);
            Controls.Add(label2);
            Controls.Add(label1);
            Name = "Form1";
            Text = "Form1";
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Label label1;
        private Label label2;
        private TextBox txtOpA;
        private TextBox txtOpB;
        private RadioButton rdbAdicao;
        private RadioButton rdbSubtracao;
        private RadioButton rdbMultiplicacao;
        private RadioButton rdbDivisao;
        private RadioButton rdbResto;
        private Button btnCalcular;
        private Label label3;
        private TextBox txtExpressao;
        private Label label4;
        private TextBox txtResultado;
        private Button btnSair;
    }
}
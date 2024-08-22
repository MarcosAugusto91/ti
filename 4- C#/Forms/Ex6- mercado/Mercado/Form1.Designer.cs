namespace Mercado
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
            label1 = new Label();
            chbNotaFiscal = new CheckBox();
            groupBox1 = new GroupBox();
            mktNotaFiscal = new MaskedTextBox();
            button1 = new Button();
            label2 = new Label();
            pictureBox1 = new PictureBox();
            groupBox2 = new GroupBox();
            txtPreco = new TextBox();
            txtDescricao = new TextBox();
            txtQtd = new TextBox();
            cmbCodigo = new ComboBox();
            label12 = new Label();
            label11 = new Label();
            label10 = new Label();
            label9 = new Label();
            btnAdicionar = new Button();
            groupBox3 = new GroupBox();
            lstPedido = new ListBox();
            btnConfExclusao = new Button();
            txtSenha = new TextBox();
            label3 = new Label();
            btnExcluir = new Button();
            groupBox4 = new GroupBox();
            btnPagamento = new Button();
            lblTroco = new Label();
            label6 = new Label();
            lblTotal = new Label();
            label4 = new Label();
            groupBox5 = new GroupBox();
            btnFinalizar = new Button();
            txtRecebido = new TextBox();
            label8 = new Label();
            rdbDinheiro = new RadioButton();
            rdbPix = new RadioButton();
            rdbCredito = new RadioButton();
            rdbDebito = new RadioButton();
            groupBox1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)pictureBox1).BeginInit();
            groupBox2.SuspendLayout();
            groupBox3.SuspendLayout();
            groupBox4.SuspendLayout();
            groupBox5.SuspendLayout();
            SuspendLayout();
            // 
            // label1
            // 
            label1.AutoSize = true;
            label1.Font = new Font("Segoe UI", 36F, FontStyle.Bold, GraphicsUnit.Point);
            label1.ForeColor = SystemColors.ButtonHighlight;
            label1.Location = new Point(611, 0);
            label1.Name = "label1";
            label1.Size = new Size(283, 65);
            label1.TabIndex = 1;
            label1.Text = "Ei! Brownie";
            // 
            // chbNotaFiscal
            // 
            chbNotaFiscal.AutoSize = true;
            chbNotaFiscal.Location = new Point(28, 67);
            chbNotaFiscal.Name = "chbNotaFiscal";
            chbNotaFiscal.Size = new Size(128, 19);
            chbNotaFiscal.TabIndex = 1;
            chbNotaFiscal.Text = "Nota Fiscal Paulista";
            chbNotaFiscal.UseVisualStyleBackColor = true;
            chbNotaFiscal.CheckedChanged += chbNotaFiscal_CheckedChanged;
            // 
            // groupBox1
            // 
            groupBox1.Controls.Add(mktNotaFiscal);
            groupBox1.Controls.Add(button1);
            groupBox1.Controls.Add(label2);
            groupBox1.Controls.Add(chbNotaFiscal);
            groupBox1.ForeColor = SystemColors.ButtonHighlight;
            groupBox1.Location = new Point(21, 233);
            groupBox1.Name = "groupBox1";
            groupBox1.Size = new Size(180, 237);
            groupBox1.TabIndex = 3;
            groupBox1.TabStop = false;
            groupBox1.Text = "Dados do Cliente";
            // 
            // mktNotaFiscal
            // 
            mktNotaFiscal.Location = new Point(29, 87);
            mktNotaFiscal.Mask = "000.000.000-00";
            mktNotaFiscal.Name = "mktNotaFiscal";
            mktNotaFiscal.Size = new Size(120, 23);
            mktNotaFiscal.TabIndex = 2;
            mktNotaFiscal.TextAlign = HorizontalAlignment.Center;
            // 
            // button1
            // 
            button1.Cursor = Cursors.Hand;
            button1.FlatAppearance.BorderSize = 0;
            button1.FlatStyle = FlatStyle.Flat;
            button1.Font = new Font("Segoe UI", 12F, FontStyle.Bold, GraphicsUnit.Point);
            button1.ForeColor = SystemColors.ActiveCaptionText;
            button1.Image = (Image)resources.GetObject("button1.Image");
            button1.ImageAlign = ContentAlignment.TopCenter;
            button1.Location = new Point(48, 116);
            button1.Name = "button1";
            button1.Size = new Size(80, 110);
            button1.TabIndex = 3;
            button1.Text = "Iniciar";
            button1.TextAlign = ContentAlignment.BottomCenter;
            button1.UseVisualStyleBackColor = true;
            button1.Click += button1_Click;
            // 
            // label2
            // 
            label2.AutoSize = true;
            label2.Font = new Font("Segoe UI", 18F, FontStyle.Bold, GraphicsUnit.Point);
            label2.ForeColor = SystemColors.ActiveCaptionText;
            label2.Location = new Point(7, 23);
            label2.Name = "label2";
            label2.Size = new Size(165, 32);
            label2.TabIndex = 3;
            label2.Text = "Cupom Fiscal";
            // 
            // pictureBox1
            // 
            pictureBox1.Image = (Image)resources.GetObject("pictureBox1.Image");
            pictureBox1.Location = new Point(9, 22);
            pictureBox1.Name = "pictureBox1";
            pictureBox1.Size = new Size(202, 191);
            pictureBox1.SizeMode = PictureBoxSizeMode.StretchImage;
            pictureBox1.TabIndex = 4;
            pictureBox1.TabStop = false;
            // 
            // groupBox2
            // 
            groupBox2.Controls.Add(txtPreco);
            groupBox2.Controls.Add(txtDescricao);
            groupBox2.Controls.Add(txtQtd);
            groupBox2.Controls.Add(cmbCodigo);
            groupBox2.Controls.Add(label12);
            groupBox2.Controls.Add(label11);
            groupBox2.Controls.Add(label10);
            groupBox2.Controls.Add(label9);
            groupBox2.Controls.Add(btnAdicionar);
            groupBox2.ForeColor = SystemColors.ButtonHighlight;
            groupBox2.Location = new Point(221, 62);
            groupBox2.Name = "groupBox2";
            groupBox2.Size = new Size(393, 164);
            groupBox2.TabIndex = 5;
            groupBox2.TabStop = false;
            groupBox2.Text = "Selecione o Produto:";
            // 
            // txtPreco
            // 
            txtPreco.Location = new Point(99, 119);
            txtPreco.Name = "txtPreco";
            txtPreco.Size = new Size(174, 23);
            txtPreco.TabIndex = 8;
            // 
            // txtDescricao
            // 
            txtDescricao.Location = new Point(99, 87);
            txtDescricao.Name = "txtDescricao";
            txtDescricao.Size = new Size(174, 23);
            txtDescricao.TabIndex = 7;
            // 
            // txtQtd
            // 
            txtQtd.Location = new Point(99, 56);
            txtQtd.Name = "txtQtd";
            txtQtd.Size = new Size(174, 23);
            txtQtd.TabIndex = 5;
            // 
            // cmbCodigo
            // 
            cmbCodigo.FormattingEnabled = true;
            cmbCodigo.Location = new Point(99, 24);
            cmbCodigo.Name = "cmbCodigo";
            cmbCodigo.Size = new Size(174, 23);
            cmbCodigo.TabIndex = 4;
            cmbCodigo.SelectedIndexChanged += cmbCodigo_SelectedIndexChanged;
            // 
            // label12
            // 
            label12.AutoSize = true;
            label12.ForeColor = SystemColors.ButtonHighlight;
            label12.Location = new Point(12, 124);
            label12.Name = "label12";
            label12.Size = new Size(82, 15);
            label12.TabIndex = 4;
            label12.Text = "Preço Unitário";
            // 
            // label11
            // 
            label11.AutoSize = true;
            label11.ForeColor = SystemColors.ButtonHighlight;
            label11.Location = new Point(12, 92);
            label11.Name = "label11";
            label11.Size = new Size(58, 15);
            label11.TabIndex = 3;
            label11.Text = "Descrição";
            // 
            // label10
            // 
            label10.AutoSize = true;
            label10.ForeColor = SystemColors.ButtonHighlight;
            label10.Location = new Point(12, 58);
            label10.Name = "label10";
            label10.Size = new Size(69, 15);
            label10.TabIndex = 2;
            label10.Text = "Quantidade";
            // 
            // label9
            // 
            label9.AutoSize = true;
            label9.ForeColor = SystemColors.ButtonHighlight;
            label9.Location = new Point(12, 26);
            label9.Name = "label9";
            label9.Size = new Size(49, 15);
            label9.TabIndex = 1;
            label9.Text = "Código:";
            // 
            // btnAdicionar
            // 
            btnAdicionar.BackColor = Color.Transparent;
            btnAdicionar.Cursor = Cursors.Hand;
            btnAdicionar.FlatAppearance.BorderColor = Color.Gray;
            btnAdicionar.FlatAppearance.BorderSize = 0;
            btnAdicionar.FlatAppearance.MouseDownBackColor = Color.Gray;
            btnAdicionar.FlatAppearance.MouseOverBackColor = Color.Gray;
            btnAdicionar.FlatStyle = FlatStyle.Flat;
            btnAdicionar.ForeColor = Color.Transparent;
            btnAdicionar.Image = (Image)resources.GetObject("btnAdicionar.Image");
            btnAdicionar.Location = new Point(300, 71);
            btnAdicionar.Name = "btnAdicionar";
            btnAdicionar.Size = new Size(80, 80);
            btnAdicionar.TabIndex = 6;
            btnAdicionar.UseVisualStyleBackColor = false;
            btnAdicionar.Click += btnAdicionar_Click;
            // 
            // groupBox3
            // 
            groupBox3.Controls.Add(lstPedido);
            groupBox3.Controls.Add(btnConfExclusao);
            groupBox3.Controls.Add(txtSenha);
            groupBox3.Controls.Add(label3);
            groupBox3.Controls.Add(btnExcluir);
            groupBox3.ForeColor = SystemColors.ButtonHighlight;
            groupBox3.Location = new Point(220, 233);
            groupBox3.Name = "groupBox3";
            groupBox3.Size = new Size(393, 237);
            groupBox3.TabIndex = 6;
            groupBox3.TabStop = false;
            groupBox3.Text = "Seu Pedido:";
            // 
            // lstPedido
            // 
            lstPedido.FormattingEnabled = true;
            lstPedido.ItemHeight = 15;
            lstPedido.Location = new Point(10, 22);
            lstPedido.Name = "lstPedido";
            lstPedido.Size = new Size(264, 199);
            lstPedido.TabIndex = 7;
            // 
            // btnConfExclusao
            // 
            btnConfExclusao.BackColor = SystemColors.ControlDarkDark;
            btnConfExclusao.Cursor = Cursors.Hand;
            btnConfExclusao.Enabled = false;
            btnConfExclusao.FlatAppearance.BorderSize = 0;
            btnConfExclusao.ForeColor = SystemColors.ButtonHighlight;
            btnConfExclusao.Location = new Point(280, 199);
            btnConfExclusao.Name = "btnConfExclusao";
            btnConfExclusao.Size = new Size(100, 23);
            btnConfExclusao.TabIndex = 10;
            btnConfExclusao.Text = "Excluir";
            btnConfExclusao.UseVisualStyleBackColor = false;
            btnConfExclusao.Click += btnConfExclusao_Click;
            // 
            // txtSenha
            // 
            txtSenha.Enabled = false;
            txtSenha.Location = new Point(280, 172);
            txtSenha.Name = "txtSenha";
            txtSenha.PasswordChar = '*';
            txtSenha.Size = new Size(100, 23);
            txtSenha.TabIndex = 9;
            txtSenha.TextAlign = HorizontalAlignment.Center;
            // 
            // label3
            // 
            label3.AutoSize = true;
            label3.Font = new Font("Segoe UI", 9F, FontStyle.Bold, GraphicsUnit.Point);
            label3.ForeColor = SystemColors.ButtonHighlight;
            label3.Location = new Point(281, 155);
            label3.Name = "label3";
            label3.Size = new Size(100, 15);
            label3.TabIndex = 2;
            label3.Text = "Digite sua senha:";
            // 
            // btnExcluir
            // 
            btnExcluir.BackColor = Color.Transparent;
            btnExcluir.Cursor = Cursors.Hand;
            btnExcluir.FlatAppearance.BorderColor = Color.DimGray;
            btnExcluir.FlatAppearance.BorderSize = 0;
            btnExcluir.FlatAppearance.MouseDownBackColor = Color.Gray;
            btnExcluir.FlatAppearance.MouseOverBackColor = Color.Gray;
            btnExcluir.FlatStyle = FlatStyle.Flat;
            btnExcluir.ForeColor = Color.Transparent;
            btnExcluir.Image = (Image)resources.GetObject("btnExcluir.Image");
            btnExcluir.Location = new Point(301, 23);
            btnExcluir.Name = "btnExcluir";
            btnExcluir.Size = new Size(80, 80);
            btnExcluir.TabIndex = 8;
            btnExcluir.UseVisualStyleBackColor = false;
            btnExcluir.Click += btnExcluir_Click;
            // 
            // groupBox4
            // 
            groupBox4.Controls.Add(btnPagamento);
            groupBox4.Controls.Add(lblTroco);
            groupBox4.Controls.Add(label6);
            groupBox4.Controls.Add(lblTotal);
            groupBox4.Controls.Add(label4);
            groupBox4.ForeColor = SystemColors.ButtonHighlight;
            groupBox4.Location = new Point(624, 62);
            groupBox4.Name = "groupBox4";
            groupBox4.Size = new Size(266, 210);
            groupBox4.TabIndex = 8;
            groupBox4.TabStop = false;
            groupBox4.Text = "Caixa";
            // 
            // btnPagamento
            // 
            btnPagamento.BackColor = SystemColors.ControlDarkDark;
            btnPagamento.Cursor = Cursors.Hand;
            btnPagamento.FlatAppearance.BorderColor = Color.DimGray;
            btnPagamento.FlatAppearance.BorderSize = 0;
            btnPagamento.FlatAppearance.MouseDownBackColor = Color.Gray;
            btnPagamento.FlatAppearance.MouseOverBackColor = Color.Gray;
            btnPagamento.FlatStyle = FlatStyle.Flat;
            btnPagamento.ForeColor = SystemColors.ButtonHighlight;
            btnPagamento.Image = (Image)resources.GetObject("btnPagamento.Image");
            btnPagamento.Location = new Point(170, 118);
            btnPagamento.Name = "btnPagamento";
            btnPagamento.Size = new Size(80, 80);
            btnPagamento.TabIndex = 11;
            btnPagamento.UseMnemonic = false;
            btnPagamento.UseVisualStyleBackColor = false;
            btnPagamento.Click += btnPagamento_Click;
            // 
            // lblTroco
            // 
            lblTroco.AutoSize = true;
            lblTroco.BackColor = Color.Transparent;
            lblTroco.Font = new Font("Segoe UI", 27.75F, FontStyle.Bold, GraphicsUnit.Point);
            lblTroco.ForeColor = Color.DarkRed;
            lblTroco.Location = new Point(144, 60);
            lblTroco.Name = "lblTroco";
            lblTroco.Size = new Size(116, 50);
            lblTroco.TabIndex = 8;
            lblTroco.Text = "00,00";
            // 
            // label6
            // 
            label6.AutoSize = true;
            label6.Font = new Font("Segoe UI", 18F, FontStyle.Bold, GraphicsUnit.Point);
            label6.ForeColor = SystemColors.ActiveCaptionText;
            label6.Location = new Point(12, 71);
            label6.Name = "label6";
            label6.Size = new Size(85, 32);
            label6.TabIndex = 7;
            label6.Text = "Troco:";
            // 
            // lblTotal
            // 
            lblTotal.AutoSize = true;
            lblTotal.BackColor = Color.Transparent;
            lblTotal.Font = new Font("Segoe UI", 36F, FontStyle.Bold, GraphicsUnit.Point);
            lblTotal.ForeColor = Color.DarkGreen;
            lblTotal.Location = new Point(109, 3);
            lblTotal.Name = "lblTotal";
            lblTotal.Size = new Size(153, 65);
            lblTotal.TabIndex = 6;
            lblTotal.Text = "00,00";
            // 
            // label4
            // 
            label4.AutoSize = true;
            label4.Font = new Font("Segoe UI", 18F, FontStyle.Bold, GraphicsUnit.Point);
            label4.ForeColor = SystemColors.ActiveCaptionText;
            label4.Location = new Point(12, 26);
            label4.Name = "label4";
            label4.Size = new Size(77, 32);
            label4.TabIndex = 5;
            label4.Text = "Total:";
            // 
            // groupBox5
            // 
            groupBox5.Controls.Add(btnFinalizar);
            groupBox5.Controls.Add(txtRecebido);
            groupBox5.Controls.Add(label8);
            groupBox5.Controls.Add(rdbDinheiro);
            groupBox5.Controls.Add(rdbPix);
            groupBox5.Controls.Add(rdbCredito);
            groupBox5.Controls.Add(rdbDebito);
            groupBox5.ForeColor = SystemColors.ButtonHighlight;
            groupBox5.Location = new Point(624, 278);
            groupBox5.Name = "groupBox5";
            groupBox5.Size = new Size(266, 192);
            groupBox5.TabIndex = 10;
            groupBox5.TabStop = false;
            groupBox5.Text = "Formas de pagamento";
            // 
            // btnFinalizar
            // 
            btnFinalizar.BackColor = SystemColors.ControlDarkDark;
            btnFinalizar.Cursor = Cursors.Hand;
            btnFinalizar.FlatAppearance.BorderSize = 0;
            btnFinalizar.FlatStyle = FlatStyle.Flat;
            btnFinalizar.ForeColor = SystemColors.ButtonHighlight;
            btnFinalizar.Image = (Image)resources.GetObject("btnFinalizar.Image");
            btnFinalizar.Location = new Point(177, 102);
            btnFinalizar.Name = "btnFinalizar";
            btnFinalizar.Size = new Size(80, 80);
            btnFinalizar.TabIndex = 17;
            btnFinalizar.UseVisualStyleBackColor = false;
            btnFinalizar.Click += btnFinalizar_Click;
            // 
            // txtRecebido
            // 
            txtRecebido.Location = new Point(21, 158);
            txtRecebido.MaxLength = 6;
            txtRecebido.Name = "txtRecebido";
            txtRecebido.Size = new Size(100, 23);
            txtRecebido.TabIndex = 16;
            txtRecebido.TextChanged += txtRecebido_TextChanged;
            // 
            // label8
            // 
            label8.AutoSize = true;
            label8.Location = new Point(20, 141);
            label8.Name = "label8";
            label8.Size = new Size(88, 15);
            label8.TabIndex = 4;
            label8.Text = "Valor Recebido:";
            // 
            // rdbDinheiro
            // 
            rdbDinheiro.AutoSize = true;
            rdbDinheiro.Location = new Point(21, 103);
            rdbDinheiro.Name = "rdbDinheiro";
            rdbDinheiro.Size = new Size(70, 19);
            rdbDinheiro.TabIndex = 15;
            rdbDinheiro.TabStop = true;
            rdbDinheiro.Text = "Dinheiro";
            rdbDinheiro.UseVisualStyleBackColor = true;
            rdbDinheiro.CheckedChanged += rdbDinheiro_CheckedChanged;
            // 
            // rdbPix
            // 
            rdbPix.AutoSize = true;
            rdbPix.Location = new Point(21, 78);
            rdbPix.Name = "rdbPix";
            rdbPix.Size = new Size(41, 19);
            rdbPix.TabIndex = 14;
            rdbPix.TabStop = true;
            rdbPix.Text = "Pix";
            rdbPix.UseVisualStyleBackColor = true;
            // 
            // rdbCredito
            // 
            rdbCredito.AutoSize = true;
            rdbCredito.Location = new Point(21, 53);
            rdbCredito.Name = "rdbCredito";
            rdbCredito.Size = new Size(64, 19);
            rdbCredito.TabIndex = 13;
            rdbCredito.TabStop = true;
            rdbCredito.Text = "Crédito";
            rdbCredito.UseVisualStyleBackColor = true;
            // 
            // rdbDebito
            // 
            rdbDebito.AutoSize = true;
            rdbDebito.Location = new Point(21, 28);
            rdbDebito.Name = "rdbDebito";
            rdbDebito.Size = new Size(60, 19);
            rdbDebito.TabIndex = 12;
            rdbDebito.TabStop = true;
            rdbDebito.Text = "Débito";
            rdbDebito.UseVisualStyleBackColor = true;
            // 
            // Form1
            // 
            AcceptButton = btnAdicionar;
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            BackColor = Color.DimGray;
            ClientSize = new Size(914, 488);
            Controls.Add(groupBox5);
            Controls.Add(groupBox4);
            Controls.Add(groupBox3);
            Controls.Add(groupBox2);
            Controls.Add(pictureBox1);
            Controls.Add(groupBox1);
            Controls.Add(label1);
            Name = "Form1";
            Text = "Form1";
            groupBox1.ResumeLayout(false);
            groupBox1.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)pictureBox1).EndInit();
            groupBox2.ResumeLayout(false);
            groupBox2.PerformLayout();
            groupBox3.ResumeLayout(false);
            groupBox3.PerformLayout();
            groupBox4.ResumeLayout(false);
            groupBox4.PerformLayout();
            groupBox5.ResumeLayout(false);
            groupBox5.PerformLayout();
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion
        private Label label1;
        private CheckBox chbNotaFiscal;
        private GroupBox groupBox1;
        private Button button1;
        private Label label2;
        private PictureBox pictureBox1;
        private GroupBox groupBox2;
        private Button btnAdicionar;
        private GroupBox groupBox3;
        private Button btnConfExclusao;
        private TextBox txtSenha;
        private Label label3;
        private Button btnExcluir;
        private GroupBox groupBox4;
        private Button btnPagamento;
        private Label lblTroco;
        private Label label6;
        private Label lblTotal;
        private Label label4;
        private GroupBox groupBox5;
        private Button btnFinalizar;
        private TextBox txtRecebido;
        private Label label8;
        private RadioButton rdbDinheiro;
        private RadioButton rdbPix;
        private RadioButton rdbCredito;
        private RadioButton rdbDebito;
        private ListBox lstPedido;
        private Label label10;
        private Label label9;
        private TextBox txtPreco;
        private TextBox txtDescricao;
        private TextBox txtQtd;
        private ComboBox cmbCodigo;
        private Label label12;
        private Label label11;
        private MaskedTextBox mktNotaFiscal;
    }
}
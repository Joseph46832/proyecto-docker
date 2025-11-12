Vagrant.configure("2") do |config|
  # Configuración del plugin vbguest (para evitar actualizaciones automáticas de Guest Additions)
  if Vagrant.has_plugin?("vagrant-vbguest")
    config.vbguest.no_install = true
    config.vbguest.auto_update = false
    config.vbguest.no_remote = true
  end

  # Máquina 1: servidorUbuntu1
  config.vm.define "servidorUbuntu1" do |servidorUbuntu1|
    servidorUbuntu1.vm.box = "bento/ubuntu-22.04"
    servidorUbuntu1.vm.hostname = "servidorUbuntu1"
    servidorUbuntu1.vm.network :private_network, ip: "192.168.100.2"
    servidorUbuntu1.vm.provider "virtualbox" do |v|
      v.cpus = 3
      v.memory = 1000
    end
  end

  # Máquina 2: servidorUbuntu2
  config.vm.define "servidorUbuntu2" do |servidorUbuntu2|
    servidorUbuntu2.vm.box = "bento/ubuntu-22.04"
    servidorUbuntu2.vm.hostname = "servidorUbuntu2"
    servidorUbuntu2.vm.network :private_network, ip: "192.168.100.3"
    servidorUbuntu2.vm.provider "virtualbox" do |v|
      v.cpus = 3
      v.memory = 1000
    end
  end
end

